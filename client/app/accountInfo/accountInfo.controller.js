'use strict';

angular.module('ursaMajorApp')
  .controller('AccountinfoCtrl', function ($scope, Auth) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.getCurrentEmail = Auth.email;

  });
