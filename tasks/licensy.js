/*
* grunt-licensy
* https://github.com/tdeekens/grunt-licensy
*
* Copyright (c) 2014 tdeekens
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {
  var
    Bower = require('./bower'),
    Npm = require('./npm'),
    Persister = require('./persister'),
    Aggregator = require('./aggregator'),
    _ = require('lodash');

  grunt.registerTask('licensy', 'A grunt task to determine your project\'s licenses.', function() {
    //Grunt related initialization
    var
      options = this.options({
        store: './dist/voguesy.json',
        bowerDir: false,
        warn: true,
        blacklist: []
      }),
      bower = new Bower(options.bowerDir),
      npm = new Npm(options.tmpDir),
      persister = new Persister(options.store),
      aggregator = new Aggregator();

    var done = this.async();

    npm.get(function(npmLicenses) {
      bower.get(function(bowerLicsenses) {
        console.log(bowerLicsenses)
        var _licenses = aggregator.get(_.merge(npmLicenses, bowerLicsenses));
        var _withoutBlacklist = _.difference(_.keys(_licenses.licenses), options.blacklist);
        var _isBlacklisted = _withoutBlacklist.length < _.keys(_licenses.licenses).length;

        persister.write(_licenses);

        if (_isBlacklisted) {
          grunt.log.errorlns('The project uses a blacklisted licsense of either: ' + options.blacklist.join(' or '));

          if (options.warn === false) {
            grunt.fail.warn('...breaking build as a result thereof!');
          }
        }

        done();
      });
    });
  });
};
