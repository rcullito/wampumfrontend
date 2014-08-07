'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'esService', function ($scope, $routeParams, $location, $cookies, esService) {

    $scope.initialform = true;

    $scope.originofWampum = function () {
      alert('Wampum is a Native American word for shell beads that were used as a form of currency.');
    };

    $scope.showAbout = function () {
      $scope.initialform = true;
    };

    $scope.go = function () {
      $scope.initialform = false;
    };


    $scope.state = 'MA';
    $scope.clothingtypes = 'chinos';
    $scope.brands = 'thegap';

}]);
