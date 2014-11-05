'use strict';

angular.module('ursaMajorApp')
  .controller('AccountinfoCtrl', function ($scope, Auth, $location) {
        if(Auth.isLoggedIn() === false) {
            $location.path('/');
        }

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.getCurrentEmail = Auth.email;

  });
