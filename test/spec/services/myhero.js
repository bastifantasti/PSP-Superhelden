'use strict';

describe('Service: myHero', function () {

  // load the service's module
  beforeEach(module('testPspApp'));

  // instantiate service
  var myHero;
  beforeEach(inject(function (_myHero_) {
    myHero = _myHero_;
  }));

  it('should do something', function () {
    expect(!!myHero).toBe(true);
  });

});
