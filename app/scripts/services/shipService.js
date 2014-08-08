'use strict';

angular.module('wampumfrontendApp')
  .service('shipService', ['$http', function ($http) {

    var begin = function (clothingtype, brand) {
      return $http({
        method: 'POST',
        url: '/begin',
        data: {
          clothingtype: clothingtype,
          brand: brand,
        }
      });
    };

    var submitShippingInfo = function (locationid, item, email) {
      return $http({
        method: 'POST',
        url: '/submit',
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
      begin: begin,
      submitShippingInfo: submitShippingInfo
    };

  }]);