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

    $scope.begin = function (clothingtypes, brands) {
      $scope.initialform = false;
      shipService.begin(clothingtypes, brands)
        .success(function (data) {
          console.log(data);
        })
        .error(function (err) {
          console.log(err);
        })
    };


    $scope.state = 'MA';
    $scope.clothingtypes = 'chinos';
    $scope.brands = 'thegap';

}]);
