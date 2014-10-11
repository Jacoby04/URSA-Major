'use strict';

angular.module('ursaMajorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('accountInfo', {
        url: '/accountInfo',
        templateUrl: 'app/accountInfo/accountInfo.html',
        controller: 'AccountinfoCtrl'
      });
  });