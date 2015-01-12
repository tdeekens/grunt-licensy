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
        bowerDir: false
      }),
      bower = new Bower(options.bowerDir),
      npm = new Npm(options.tmpDir),
      persister = new Persister(options.store),
      aggregator = new Aggregator();

    var done = this.async();

    npm.get(function(npmLicenses) {
      bower.get(function(bowerLicsenses) {
        persister.write(aggregator.get(_.merge(npmLicenses, bowerLicsenses)));

        done();
      });
    });
  });
};
