'use strict';

angular.module('ursaMajorApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
      $scope.isLoggedIn = Auth.isLoggedIn;

  });
