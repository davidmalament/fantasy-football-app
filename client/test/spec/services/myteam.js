'use strict';

describe('Service: myteam', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var myteam;
  beforeEach(inject(function (_myteam_) {
    myteam = _myteam_;
  }));

  it('should do something', function () {
    expect(!!myteam).toBe(true);
  });

});
