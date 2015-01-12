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
    _symlinked = false;

  if (!fs.existsSync('./bower_components') && this._bowerDir) {
    shelljs.exec('ln -s ' + this._bowerDir + ' ./bower_components');
    _symlinked = true;
  }

  if (fs.existsSync('./bower.json')) {
    var _this = this;

    licenses.init('.', function(json) {
      onComplete(json);

      if (_symlinked === true && _this._bowerDir) {
        shelljs.exec('rm -rf bower_components');
      }
    });
  }
};

module.exports = Bower;
