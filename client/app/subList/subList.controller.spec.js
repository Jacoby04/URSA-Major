'use strict';

describe('Controller: SublistCtrl', function () {

  // load the controller's module
  beforeEach(module('ursaMajorApp'));

  var SublistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SublistCtrl = $controller('SublistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
