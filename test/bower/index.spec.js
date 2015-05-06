var
  expect = require('chai').expect,
  _ = require('lodash');

var Bower = require('../../tasks/bower/index'),
    bower;

describe('Bower dependency fetcher specification', function() {
  beforeEach(function() {
    bower = new Bower('bower_modules');
  });

  it('it gets and parses licenses of bower packages', function() {
    var _bower = bower.get(function(_bower) {
      expect(_bower['jquery@2.1.4']).is.an.object;
      expect(_bower['jquery@2.1.4'].licenses).to.be.an.array;
      expect(_bower['jquery@2.1.4'].licenses).to.contain('MIT');
    });
  });
});
