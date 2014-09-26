'use strict';

angular.module('wampumfrontendApp')
  .controller('ShippingCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    $scope.clothingtype = $routeParams.clothingtype;
    $scope.brand = $routeParams.brand;
    $scope.locationid = $routeParams.locationid;
    $scope.state = 'State';
    $scope.shippingform = true;
    $scope.brand = 'amazon';


    $scope.submitShippingInfo = function (brand, full_name, email, address_line_1, address_line_2, city, state, zip) {
      mainService.submitShippingInfo (brand, full_name, email, address_line_1, address_line_2, city, state, zip)
        .success(function (data) {
          $scope.shippingform = false;
          $scope.submitted = true;
        })
        .error(function (err) {
          $scope.error_message = err.message;
        })
    };



}]);
