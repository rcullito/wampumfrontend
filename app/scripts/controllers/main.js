'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    smoothScroll.init();

    $scope.clothingselection = 'shirts';
    $scope.brand = 'gap';

    $scope.additional = 'about';

    $scope.transition = function (newstate) {
      $scope.additional = newstate;
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
