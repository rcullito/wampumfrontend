'use strict';

angular.module('wampumfrontendApp')
  .controller('DestinationCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {


    $scope.clothingtype = $routeParams.clothingtypes;
    $scope.brand = $routeParams.brands;

    $scope.secondform = true;

    var clothingSearch = function () {
      mainService.clothingSearch($scope.clothingtype)
        .success(function (data) {
          if (data.length) {
            $scope.entries = data;
            $scope.result_length = data.length;
          } else {
            $scope.entries = [{
              name: 'Wampum Warehouse',
              description: "Wampum Warehouse is where we accept items that are currently not accepted by any of our partners. We'll accept any type of clothing!",
              id: 0
            }];
            $scope.result_length = 1;
          }
        })
        .error(function (err) {
          console.log(err);
        });      
      };


    clothingSearch()

    $scope.clothingSearch = clothingSearch;
    


    $scope.upcyclelocation = 'bluejeansgogreen';

}]);
