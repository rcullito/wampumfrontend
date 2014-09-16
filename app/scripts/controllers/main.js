'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    smoothScroll.init();

    $scope.clothingselection = 'shirts';
    $scope.brand = 'gap';

    $scope.about = true;
    $scope.howitworks = false;

    $scope.aboutface = function () {
      $scope.about = true;
      $scope.howitworks = false;
    };

    $scope.howitworksface = function () {
      $scope.howitworks = true;
      $scope.about = false;
    };

    $scope.$watch('clothingselection', function(newVal, oldVal) {
      if (newVal === 'other') {
        $scope.clothingtype = undefined;
        $scope.defaultclothing = true;
      }
      if (newVal !== 'other') {
        $scope.defaultclothing = false
        $scope.clothingtype = $scope.clothingselection;
      }
    });

}]);
