'use strict';

describe('Controller: TeamsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TeamsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamsCtrl = $controller('TeamsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeamsCtrl.awesomeThings.length).toBe(3);
  });
});
