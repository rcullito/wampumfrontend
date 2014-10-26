'use strict';

angular.module('wampumfrontendApp')
  .controller('ShippingCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    $scope.clothingtype = $routeParams.clothingtype;
    $scope.brand = $routeParams.brand;
    $scope.locationid = $routeParams.locationid;
    $scope.state = 'State';
    $scope.shippingform = true;
    $scope.brand = 'amazon';


    $scope.submitShippingInfo = function (full_name, email) {

      console.log('submitted to the helper');
      mainService.submitShippingInfo (full_name, email)
        .success(function (data) {
          $scope.shippingform = false;
          $scope.submitted = true;
        })
        .error(function (err) {
          $scope.error_message = err.message;
        })
    };



}]);
