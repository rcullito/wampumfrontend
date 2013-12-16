'use strict';

angular.module('wampumfrontendApp')
  .service('esQueryService', function ($http) {


    var prefixQuery = function(index, prefix_term) {
      return $http({
        method: 'GET',
        url: '/prefixQuery/' + index + '/' + prefix_term,
      });
    };

    return {
      prefixQuery: prefixQuery,
    };
  });