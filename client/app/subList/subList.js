'use strict';

angular.module('ursaMajorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('subList', {
        url: '/subList',
        templateUrl: 'app/subList/subList.html',
        controller: 'SublistCtrl'
      });
  });