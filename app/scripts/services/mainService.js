'use strict';

angular.module('wampumfrontendApp')
  .service('mainService', ['$http', function ($http) {

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

    var clothingSearch = function (clothingtype) {
      return $http({
        method: 'GET',
        url: '/search/' + clothingtype,
      });
    };

    var submitShippingInfo = function (brand, full_name, email, address_line_1, address_line_2, city, state, zip) {
      return $http({
        method: 'POST',
        url: '/submitshipping',
        data: {
          brand: brand,
          full_name: full_name,
          email: email,
          address_line_1: address_line_1,
          address_line_2: address_line_2,
          city: city,
          state: state,
          zip: zip
        }
      });
    };

    return {
      begin: begin,
      clothingSearch: clothingSearch,
      submitShippingInfo: submitShippingInfo
    };

  }]);