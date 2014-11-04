'use strict';

angular.module('ursaMajorApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Homepage',
      'link': '/'
    }, {
        'title': 'Create a URS Submission',
        'link': '/submission'
    }, {
        'title': 'Submission List',
        'link': '/subList'
    },{
        'title': 'Account Information',
        'link': '/accountInfo'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });



/// Example Spreadsheet ID : 11UhreZn8ZcrZ1LSWJz2s1PWEdHcjhuNkVn7w_yPfTFc