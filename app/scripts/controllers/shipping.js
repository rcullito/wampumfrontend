'use strict';

angular.module('wampumfrontendApp')
  .controller('ShippingCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'locationsService', function ($scope, $routeParams, $location, $cookies, locationsService) {

    console.log('here in the shipping controller');

    $scope.clothingtype = $routeParams.clothingtype;
    $scope.state = 'State';

    // TODO remove this
    $scope.shippinglabel = 'yes';


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


    
}]);
