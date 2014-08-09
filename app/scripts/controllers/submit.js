'use strict';

angular.module('wampumfrontendApp')
  .controller('SubmitCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {


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

}]);
