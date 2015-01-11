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
    _ = require('lodash');

  grunt.registerTask('licensy', 'A grunt task to determine your project\'s licenses.', function() {
    //Grunt related initialization
    var
      options = this.options({
        store: './dist/voguesy.json'
      });

    //Setup helper objects with grunt options passed in
    var
      bower = new Bower();
  });
};
