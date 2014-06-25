'use strict';

angular.module('wampumfrontendApp')
  .service('profileService', ['$http', function ($http) {

    var getUserById = function (userid) {
      return $http({
        method: 'GET',
        url: '/user',
        params: {
          userid: userid,
        }
      })
    }



    return {
      getUserById: getUserById
    };

  }]);