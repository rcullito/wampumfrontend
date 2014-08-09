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


    $scope.clothingtypes = 'shirts';
    $scope.brands = 'thegap';

}]);
