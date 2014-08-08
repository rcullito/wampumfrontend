'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'shipService', function ($scope, $routeParams, $location, $cookies, shipService) {

    $scope.initialform = true;

    $scope.originofWampum = function () {
      alert('Wampum is a Native American word for shell beads that were used as a form of currency.');
    };

    $scope.contact = function () {
      alert('Email rob@wampum.io');
    };

    $scope.showAbout = function () {
      $scope.initialform = true;
    };

    $scope.begin = function (clothingtypes, brands) {
      $scope.initialform = false;
      shipService.begin(clothingtypes, brands)
        .success(function (data) {
          $scope.secondform = true;
        })
        .error(function (err) {
          console.log(err);
        })
    };

    $scope.submitShippingInfo = function (clothingtypes, brands, address_line_1, address_line_2, city, state, zip) {
      $scope.submitted = true;
      shipService.submitShippingInfo (clothingtypes, brands, address_line_1, address_line_2, city, state, zip)
        .success(function (data) {
          $scope.secondform = false;
          $scope.submitted = true;
        })
        .error(function (err) {
          $scope.error_message = err.message;
        })
    };


    $scope.state = 'MA';
    $scope.clothingtypes = 'chinos';
    $scope.brands = 'thegap';

}]);
