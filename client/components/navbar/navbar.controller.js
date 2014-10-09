'use strict';

angular.module('ursaMajorApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Homepage',
      'link': '/'
    }, {
        'title': 'Submit a URS Submission',
        'link': '/'
    }, {
        'title': 'Submission List',
        'link': '/'
    },{
        'title': 'Account Information',
        'link': '/'
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