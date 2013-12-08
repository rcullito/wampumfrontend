'use strict';

angular.module('wampumfrontendApp')
  .service('esQueryService', function ($http) {


    var prefixQuery = function(prefix_term) {
      return $http({
        method: 'GET',
        url: '/prefixQuery/stuff/' + prefix_term,
      });
    };

    return {
      prefixQuery: prefixQuery,
    };
  });