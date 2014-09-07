'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    smoothScroll.init();

    $scope.clothingtypes = 'shirts';
    $scope.brands = 'gap';

    $scope.$watch('clothingtypes', function(newVal, oldVal) {
      console.log(newVal);
      if (newVal === 'other') {
        $scope.otherclothingtypes = true;
      }
    });

}]);
