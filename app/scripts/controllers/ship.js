'use strict';

angular.module('wampumfrontendApp')
  .controller('ShipCtrl', ['$scope', '$routeParams', '$location', 'shipService', function ($scope, $routeParams, $location, shipService) {

    $scope.locationid = $routeParams.locationid;
    $scope.item = $routeParams.item;

    $scope.address = false;

    $scope.showAddress = function () {
      $scope.address = !$scope.address;
    }

    shipService.getLocationById($scope.locationid)
      .success(function (location) {
        $scope.mailingaddress = location._source.mailingaddress.split('|');
      })
      .error(function (err) {
        console.log(err);
      });      

    $scope.submitShipping = function (locationid, item, address_line_1, address_line_2, city, state, zip, email) {

      shipService.submitShippingInfo(locationid, item, address_line_1, address_line_2, city, state, zip, email)
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