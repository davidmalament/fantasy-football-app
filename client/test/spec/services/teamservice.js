'use strict';

describe('Service: teamservice', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var teamservice;
  beforeEach(inject(function (_teamservice_) {
    teamservice = _teamservice_;
  }));

  it('should do something', function () {
    expect(!!teamservice).toBe(true);
  });

});
