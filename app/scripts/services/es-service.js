'use strict';

angular.module('wampumfrontendApp')
  .service('esService', ['$http', function ($http) {

    var search = function (index, search_term) {
      return $http({
        method: 'GET',
        url: '/search/' + index + '/' + search_term,
      })
    };

    var clickEvent = function (event_type, event_value, requestid) {
      return $http({
        method: 'POST',
        url: 'clickevent',
        data: {
          event_type: event_type,
          event_value: event_value,
          requestid: requestid,
        }
      });
    };

    return {
      search: search,
      clickEvent: clickEvent
    };

  }]);