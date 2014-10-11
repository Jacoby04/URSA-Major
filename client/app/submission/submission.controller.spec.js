'use strict';

describe('Controller: SubmissionCtrl', function () {

  // load the controller's module
  beforeEach(module('ursaMajorApp'));

  var SubmissionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmissionCtrl = $controller('SubmissionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
