var
  expect = require('chai').expect,
  _ = require('lodash');

var Npm = require('../../tasks/npm/index'),
    npm;

describe('Npm dependency fetcher specification', function() {
  beforeEach(function() {
    npm = new Npm('./tasks/.tmp/');
  });

  it('it gets and parses licenses of npm packages', function() {
    var _npm = npm.get();

    expect(_npm['lodash@2.4.1']).is.an.object;
    expect(_npm['lodash@2.4.1'].licenses).to.be.an.array;
    expect(_npm['lodash@2.4.1'].licenses).to.contain('MIT');
  });
});
