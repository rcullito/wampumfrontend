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
      });
    };

    var getLocationById = function (locationid) {
      return $http({
        method: 'GET',
        url: '/location',
        params: {
          locationid: locationid,
        }
      });
    };

    return {
      getUserById: getUserById,
      getLocationById: getLocationById
    };

  }]);