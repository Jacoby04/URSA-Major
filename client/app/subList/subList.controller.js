'use strict';

angular.module('ursaMajorApp')
    .controller('SublistCtrl', function ($scope, $http, Auth, $location) {
        if(Auth.isLoggedIn() === false) {
            $location.path('/');
        }
    });