'use strict';

angular.module('wampumfrontendApp')
  .controller('SubmitCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {


    $scope.clothingtypes = $routeParams.clothingtypes;
    $scope.brands = $routeParams.brands;

    $scope.secondform = true;


    $scope.submitShippingInfo = function (clothingtypes, brands, address_line_1, address_line_2, city, state, zip, email) {
      mainService.submitShippingInfo (clothingtypes, brands, address_line_1, address_line_2, city, state, zip, email)
        .success(function (data) {
          $scope.secondform = false;
          $scope.submitted = true;
        })
        .error(function (err) {
          $scope.error_message = err.message;
        })
    };

    $scope.state = 'state';

    $scope.upcyclelocation = 'bluejeansgogreen';

}]);
