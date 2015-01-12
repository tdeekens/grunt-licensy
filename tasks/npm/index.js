'use strict';

var
  _ = require('lodash'),
  fs = require('fs'),
  shelljs = require('shelljs'),
  licenses = require('npm-license');

function Npm(tmpDir) {
  this._tmpDir = tmpDir;
}

Npm.prototype.get = function(onComplete) {
  var _json = null;

  licenses.init({
    start: '.',
    depth: 'all',
    include: 'all',
    meta: null
  }, function(json) {
    onComplete(json);
  });
};

module.exports = Npm;
