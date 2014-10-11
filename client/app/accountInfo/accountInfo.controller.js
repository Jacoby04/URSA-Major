'use strict';

angular.module('ursaMajorApp')
  .controller('AccountinfoCtrl', function ($scope) {

    $scope.userInfo = [];

    $scope.showUserInfo = function() {

       $http.get('/api/userInfos').success(function(userInfo) {
                $scope.userInfo = userInfo;
            });
    }

  });
