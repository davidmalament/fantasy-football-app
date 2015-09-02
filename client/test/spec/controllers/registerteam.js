'use strict';

describe('Controller: RegisterteamCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RegisterteamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterteamCtrl = $controller('RegisterteamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterteamCtrl.awesomeThings.length).toBe(3);
  });
});
