'use strict';

angular.module('wampumfrontendApp')
  .controller('DestinationCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {


    $scope.clothingtype = $routeParams.clothingtypes;
    $scope.brand = $routeParams.brands;

    $scope.secondform = true;

    var getRandomEntry = function (collection) {
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
          $scope.entry = data[getRandomEntry(data).random_key];
          $scope.locationid = $scope.entry.id;
        })
        .error(function (err) {
          console.log(err);
        });      
      };


    clothingSearch()

    $scope.clothingSearch = clothingSearch;
    


    $scope.submitShippingInfo = function (clothingtypes, brands, address_line_1, address_line_2, city, state, zip, email) {
      mainService.submitShippingInfo (clothingtypes, brands, address_line_1, address_line_2, city, state, zip, email)
        .success(function (data) {
          $scope.secondform = false;
          $scope.submitted = true;
        })
        .error(function (err) {
          $scope.error_message = err.message;
        })
    };

    $scope.state = 'state';

    $scope.upcyclelocation = 'bluejeansgogreen';

}]);
