'use strict';

angular.module('ursaMajorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('submission', {
        url: '/submission',
        templateUrl: 'app/submission/submission.html',
        controller: 'SubmissionCtrl'
      });
  });