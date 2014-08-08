'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'shipService', function ($scope, $routeParams, $location, $cookies, shipService) {

    $scope.initialform = true;

    $scope.originofWampum = function () {
      alert('Wampum is a Native American word for shell beads that were used as a form of currency.');
    };

    $scope.showAbout = function () {
      $scope.initialform = true;
    };

    $scope.go = function (clothingtypes, brands) {
      $scope.initialform = false;
      shipService.allMyFavoriteBrands(clothingtypes, brands);
      // TODO put success handlers here
    };


    $scope.state = 'MA';
    $scope.clothingtypes = 'chinos';
    $scope.brands = 'thegap';

}]);
