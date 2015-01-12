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

    expect(_npm['abbrev@1.0.5']).is.an.object;
    expect(_npm['abbrev@1.0.5'].licenses).to.be.an.array;
    expect(_npm['abbrev@1.0.5'].licenses).to.contain('MIT');
  });
});
