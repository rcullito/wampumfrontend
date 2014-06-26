'use strict';

angular.module('wampumfrontendApp')
  .service('profileService', ['$http', function ($http) {

    var getUserById = function (userid) {
      return $http({
        method: 'GET',
        url: '/user',
        params: {
          userid: userid,
        }
      });
    };

    var getLocationById = function (locationid) {
      return $http({
        method: 'GET',
        url: '/location',
        params: {
          locationid: locationid,
        }
      });
    };

    var submitShippingInfo = function (userid, locationid, item_width, item_height, address_line_1, address_line_2, city, state, zip) {
      return $http({
        method: 'POST',
        url: '/submitshipping',
        data: {
          userid: userid,
          locationid: locationid,
          item_width: item_width,
          item_height: item_width,
          address_line_1: address_line_1,
          address_line_2: address_line_2,
          city: city,
          state: state,
          zip: zip
        }
      });
    };

    return {
      getUserById: getUserById,
      getLocationById: getLocationById,
      submitShippingInfo: submitShippingInfo
    };

  }]);