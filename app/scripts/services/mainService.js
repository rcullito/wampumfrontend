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

    var submitShippingInfo = function (full_name, email) {
      return $http({
        method: 'POST',
        url: '/submitshipping',
        data: {
          full_name: full_name,
          email: email
        }
      });
    };

    return {
      begin: begin,
      clothingSearch: clothingSearch,
      submitShippingInfo: submitShippingInfo
    };

  }]);