'use strict';

angular.module('ursaMajorApp')
    .controller('SublistCtrl', function ($scope, $http, Auth, $location) {
        if(Auth.isLoggedIn() === false) {
            $location.path('/');
        }

        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.jsonSource = "https://spreadsheets.google.com/feeds/list/1ImSQ0fy65Bc9NjmgHrpruaDrodC2uJ1n4RYl2OTX9Po/od6/public/values?alt=json";
        $scope.localData = [];

        $scope.updateLocalData = function(){
            $http({method:'GET', url: $scope.jsonSource}).success(function(data) {
                angular.forEach(data.feed.entry, function(value){
                    $scope.localData.push(value);
                });
            });
        };

        $scope.updateLocalData();
    });