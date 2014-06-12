'use strict';

angular.module('wampumfrontendApp')
  .service('esService', ['$http', function ($http) {

    var hyphy = function (inputstring) {
      var wss = inputstring.split(' ');
      return wss.join('-');
    }

    var search = function (search_term) {
      return $http({
        method: 'GET',
        url: '/search/' + search_term,
      })
    };

    var clickEvent = function (event_type, event_value, requestid) {
      return $http({
        method: 'POST',
        url: 'clickevent',
        data: {
          event_type: event_type,
          event_value: hyphy(event_value),
          requestid: requestid,
        }
      });
    };

    return {
      search: search,
      clickEvent: clickEvent
    };

  }]);