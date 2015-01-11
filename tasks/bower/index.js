'use strict';

var
  _ = require('lodash'),
  fs = require('fs'),
  licenses = require('bower-license'),
  shelljs = require('shelljs');

function Bower(bowerDir) {
  this._bowerDir = bowerDir;
}

Bower.prototype.get = function(onComplete) {
  var
    _json = {},
    _symlinked = false;

  if (!fs.existsSync('./bower_components') && this._bowerDir) {
    shelljs.exec('ln -s ' + this._bowerDir + ' ./bower_components');
    _symlinked = true;
  }

  if (fs.existsSync('./bower.json')) {
    _json = shelljs.exec('./node_modules/bower-license/bin/bower-license -e json', {
      silent: true,
      async: false
    }).output;

    _json = JSON.parse(_json);
  }

  if (_symlinked === true && this._bowerDir) {
    shelljs.exec('rm -rf bower_components');
  }

  return _json;
};

module.exports = Bower;
