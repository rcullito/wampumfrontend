'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    smoothScroll.init();

    $scope.clothingtypes = 'shirts';
    $scope.brands = 'gap';

    // have another scope var named clothign selection
    // if clothignselection is other than 
    // clothing type is the new form ng-model
    // if it isnt then clothingselectin and 
    // clothing type are the same

    $scope.$watch('clothingtypes', function(newVal, oldVal) {
      console.log(newVal);
      if (newVal === 'other') {
        $scope.otherclothingtypes = true;
      }
      if (newVal !== 'other') {
        $scope.otherclothingtypes = false;
      }
    });

}]);
