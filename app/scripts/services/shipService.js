'use strict';

angular.module('wampumfrontendApp')
  .service('shipService', ['$http', function ($http) {

    var getLocationById = function (locationid) {
      return $http({
        method: 'GET',
        url: '/location/' + locationid,
      });
    };

    var submitShippingInfo = function (locationid, item, email) {
      return $http({
        method: 'POST',
        url: '/submitshipping',
        data: {
          locationid: locationid,
          item: item,
          // address_line_1: address_line_1,
          // address_line_2: address_line_2,
          // city: city,
          // state: state,
          // zip: zip,
          email: email
        }
      });
    };

    return {
      getLocationById: getLocationById,
      submitShippingInfo: submitShippingInfo
    };

  }]);