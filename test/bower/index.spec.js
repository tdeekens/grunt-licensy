var expect = require('chai').expect;

var Bower = require('../../tasks/bower/index'),
    bower;

describe('Semver comparator specification', function() {
  beforeEach(function() {
    bower = new Bower();
  });

  it('it parses valid semver strings', function() {
    expect(true).to.be.true;
  });
});
