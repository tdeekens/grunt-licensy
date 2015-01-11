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
      npm = new Npm(),
      persister = new Persister(options.store),
      aggregator = new Aggregator();

    var
      _npm = npm.get(),
      _bower = bower.get();

    var
      _merged = _.merge(_npm, _bower);

    persister.write(aggregator.get(_merged));
  });
};
