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

    $scope.submitShipping = function (locationid, item, email) {

      shipService.submitShippingInfo(locationid, item, email)
        .success(function (data) {
          if (data) {
            $scope.submitted = true;
          }
        })
        .error(function (err) {
          var re = /address_line_/gi;
          var new_message = err.message.replace(re, " address line ")
          $scope.error = new_message;
        })

    };

  }]);