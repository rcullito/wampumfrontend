'use strict';

angular.module('wampumfrontendApp')
  .service('esService', ['$http', function ($http) {

    var search = function (index, search_term) {
      return $http({
        method: 'GET',
        url: '/search/' + index + '/' + search_term,
      })
    };

    return {
      search: search
    };

  }]);