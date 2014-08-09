'use strict';

angular.module('wampumfrontendApp')
  .service('locationsService', ['$http', function ($http) {

    var locations = function () {
      return $http({
        method: 'GET',
        url: '/alllocations',
      });
    };

    return {
      locations: locations,
    };

  }]);