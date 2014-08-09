'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    $scope.initialform = true;
    $scope.submitted = false;

    smoothScroll.init();

    $scope.clothingtypes = 'shirts';
    $scope.brands = 'thegap';

}]);
