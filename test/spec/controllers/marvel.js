'use strict';

describe('Controller: MarvelCtrl', function () {

  // load the controller's module
  beforeEach(module('testPspApp'));

  var MarvelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarvelCtrl = $controller('MarvelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
