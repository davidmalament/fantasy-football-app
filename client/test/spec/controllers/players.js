'use strict';

describe('Controller: PlayersCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PlayersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayersCtrl = $controller('PlayersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlayersCtrl.awesomeThings.length).toBe(3);
  });
});
