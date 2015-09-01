'use strict';

describe('Controller: UserlistCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserlistCtrl = $controller('UserlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserlistCtrl.awesomeThings.length).toBe(3);
  });
});
