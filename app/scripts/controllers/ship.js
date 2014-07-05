'use strict';

angular.module('wampumfrontendApp')
  .controller('ShipCtrl', ['$scope', '$routeParams', '$location', 'shipService', function ($scope, $routeParams, $location, shipService) {

    $scope.locationid = $routeParams.locationid;
    $scope.item = $routeParams.item;

    shipService.getLocationById($scope.locationid)
      .success(function (location) {
        $scope.mailingaddress = location._source.mailingaddress.split('|');
      })
      .error(function (err) {
        console.log(err);
      });      

    $scope.submitShipping = function (userid, locationid, item_width, item_height, address_line_1, address_line_2, city, state, zip) {

      shipService.submitShippingInfo(locationid, item_width, item_height, address_line_1, address_line_2, city, state, zip)
        .success(function (data) {
          if (data) {
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