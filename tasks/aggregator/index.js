'use strict';

var
  _processUnknown,
  _ = require('lodash');

function Aggregator() {
}

_processUnknown = function(licenses) {
  return _.map(licenses, function(license) {
    return (
      license === null || license === undefined || license === 'UNKNOWN' ?
        'Unknown' : license
    );
  });
};

Aggregator.prototype.get = function(packages) {
  var _output = {
    licenses: {},
    packages: {}
  };

  _.each(packages, function(packageInfo, packageName) {
    var _licenses = _.isArray(packageInfo.licenses) ?
      packageInfo.licenses : [packageInfo.licenses];

    _.each(_processUnknown(_licenses), function(license) {
      _output.licenses[license] = _output.licenses[license] || 0;
      _output.packages[license] = _.uniq(_output.packages[license], true) || [];

      _output.packages[license].push(packageName);
      _output.licenses[license]++;
    });
  });

  return _output;
};

module.exports = Aggregator;
