'use strict';

angular.module('ursaMajorApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
        changeRole: {
            method: 'PUT',
            params: {
            }
        },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
