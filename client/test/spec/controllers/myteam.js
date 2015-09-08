'use strict';

describe('Controller: MyteamCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MyteamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyteamCtrl = $controller('MyteamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyteamCtrl.awesomeThings.length).toBe(3);
  });
});
