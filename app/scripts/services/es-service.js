'use strict';

angular.module('wampumfrontendApp')
  .service('esService', ['$http', function ($http) {

    var search = function (search_term) {
      return $http({
        method: 'GET',
        url: '/search/' + search_term,
      })
    };

    return {
      search: search,
    };

  }]);