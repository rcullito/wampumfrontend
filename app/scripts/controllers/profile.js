'use strict';

angular.module('wampumfrontendApp')
  .controller('ProfileCtrl', ['$scope', '$routeParams', '$location', 'profileService', function ($scope, $routeParams, $location, profileService) {

    $scope.locationid = $routeParams.locationid;

    profileService.getLocationById($scope.locationid)
      .success(function (location) {
        $scope.mailingaddress = location._source.mailingaddress.split('|');
      })
      .error(function (err) {
        console.log(err);
      });      

    $scope.submitShipping = function (userid, locationid, item_width, item_height, address_line_1, address_line_2, city, state, zip) {

      profileService.submitShippingInfo(locationid, item_width, item_height, address_line_1, address_line_2, city, state, zip)
        .success(function (data) {
          console.log(data);
          if (data) {
            $cookies.locationid = false;
            $scope.nothingset = false;
            $scope.locationid = null;
            $scope.submitted = true;
          }
        })
        .error(function (data) {
          console.log(data);
        })

    };

  }]);