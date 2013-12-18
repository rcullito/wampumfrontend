'use strict';

angular.module('wampumfrontendApp')
  .service('esService', function ($http) {


    var prefixQuery = function(index, prefix_term) {
      return $http({
        method: 'GET',
        url: '/prefixQuery/' + index + '/' + prefix_term,
      });
    };

    var eventCollector = function(raw_event) {
      return $http({
        method: 'POST',
        url: '/eventcollector',
        data: raw_event,
      });
    };

    return {
      prefixQuery: prefixQuery,
      eventCollector: eventCollector,
    };
  });