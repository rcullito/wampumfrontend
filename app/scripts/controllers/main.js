'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    $scope.initialform = true;
    $scope.submitted = false;

    smoothScroll.init();

    $scope.home = function () {
      $scope.initialform = true;
      $scope.secondform = false;
      $scope.submitted = false;
    };

    $scope.begin = function (clothingtypes, brands) {
      $scope.initialform = false;
      mainService.begin(clothingtypes, brands)
        .success(function (data) {
          $scope.secondform = true;
        })
        .error(function (err) {
          console.log(err);
        })
    };

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
    $scope.clothingtypes = 'chinos';
    $scope.brands = 'thegap';

}]);
