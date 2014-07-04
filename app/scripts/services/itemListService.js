'use strict';

angular.module('wampumfrontendApp')
  .service('itemListService', ['$http', function ($http) {

    var tags = function () {
      return $http({
        method: 'GET',
        url: '/tags',
      })
    };

    return {
      tags: tags,
    };

  }]);