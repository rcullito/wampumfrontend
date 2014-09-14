'use strict';

angular.module('wampumfrontendApp')
  .controller('ShippingCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'locationsService', function ($scope, $routeParams, $location, $cookies, locationsService) {

    console.log('here in the shipping controller');

    $scope.clothingtype = $routeParams.clothingtype;
    $scope.state = 'State';
}]);
