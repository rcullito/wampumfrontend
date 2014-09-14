'use strict';

angular.module('wampumfrontendApp')
  .controller('DestinationCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {


    $scope.clothingtype = $routeParams.clothingtypes;
    $scope.brand = $routeParams.brands;

    $scope.secondform = true;

    var getResultInfo = function (collection) {
      var collection_length = collection.length;
      var random_key = _.random(0, collection_length - 1);
      return  {
        random_key: random_key,
        collection_length: collection_length
      };
    };

    var clothingSearch = function () {
      mainService.clothingSearch($scope.clothingtype)
        .success(function (data) {
          // TODO figure something out for when we don't have any resutls for the other type
          var resultInfo = getResultInfo(data);
          var resultLength = resultInfo.collection_length;
          if (resultLength) {
            var resultKey = resultInfo.random_key;
            $scope.entry = data[resultKey];
            $scope.result_length = resultInfo.collection_length;
          } else {
            $scope.result_length = 1;
            $scope.entry = {
              name: 'Wampum Warehouse',
              description: "Wampum Warehouse is where we accept items that are currently not accepted by any of our partners. We'll accept any type of clothing!",
              id: 0
            };
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
