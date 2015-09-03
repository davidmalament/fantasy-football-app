'use strict';

describe('Service: playerservice', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var playerservice;
  beforeEach(inject(function (_playerservice_) {
    playerservice = _playerservice_;
  }));

  it('should do something', function () {
    expect(!!playerservice).toBe(true);
  });

});
