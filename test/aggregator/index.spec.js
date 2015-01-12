var
  expect = require('chai').expect,
  _ = require('lodash');

var Aggregator = require('../../tasks/aggregator/index'),
    aggregator,
    Bower = require('../../tasks/bower/index'),
    bower,
    Npm = require('../../tasks/npm/index'),
    npm,
    licenses;

describe('Aggregator specification', function() {
  beforeEach(function() {
    aggregator = new Aggregator();
    npm = new Npm('./tasks/.tmp/');
    bower = new Bower('bower_modules');

    licenses = aggregator.get(_.merge(bower.get(), npm.get()));
  });

  it('it aggregates licenses and their sums', function() {
    expect(licenses.licenses).to.be.an.array;
    expect(licenses.licenses.MIT).to.be.an.integer;
  });

  it('it aggregates licenses and their packages', function() {
    expect(licenses.packages).to.be.an.object;
    expect(licenses.packages.MIT).to.be.an.array;
    expect(licenses.packages.MIT).to.contain('jquery@2.1.3');
  });
});
