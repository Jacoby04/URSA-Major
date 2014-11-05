'use strict';

angular.module('ursaMajorApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, $location) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

        if(!Auth.isAdmin()) {
            $location.path('/');
        }

        $scope.roleOptions =
            [   'Student',
                'Review Group 1',
                'Review Group 2',
                'Committee Chair'
            ];

        $scope.role =
            [""];


        $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

        $scope.changeRole = function(user) {
            console.log(user);
            if(confirm('Are you sure you want to update this users role?')) {
                Auth.changeRole(user.role, user);
            };
        };
  });
