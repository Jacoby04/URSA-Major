'use strict';

angular.module('ursaMajorApp')
  .controller('SubmissionCtrl', function ($scope, $location, Auth) {
    $scope.message = 'Hello';
        if(Auth.isLoggedIn() === false) {
            $location.path('/');
        }

  });

