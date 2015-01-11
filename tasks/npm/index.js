'use strict';

var
  _ = require('lodash'),
  fs = require('fs'),
  licenses = require('bower-license'),
  shelljs = require('shelljs');

function Npm() {
}

Npm.prototype.get = function(onComplete) {
  var _json = null;

  shelljs.exec('./node_modules/npm-license/bin/npm-license --json ./tasks/.tmp/npm.json', {
    silent: true,
    async: false
  });

  _json = fs.readFileSync('./tasks/.tmp/npm.json');
  _json = JSON.parse(_json);

  return _json;
};

module.exports = Npm;
