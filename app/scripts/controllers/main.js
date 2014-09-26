'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    smoothScroll.init();

    $scope.clothingselection = 'shirts';
    $scope.brand = 'amazon';

    $scope.additional = 'about';

    $scope.transition = function (newstate) {
      $scope.additional = newstate;
    };

    $scope.$watch('brand', function(newVal, oldVal) {
      if (newVal === 'other') {
        $scope.clothingtype = undefined;
        $scope.defaultclothing = true;
      }
      if (newVal !== 'other') {
        $scope.defaultclothing = false
        $scope.clothingtype = $scope.clothingselection;
      }
    });

    var box_data = [
      {
        "name" : "Chantel Yip",
        "clothes" : {
          "button down" : 1,
          "pajama top" : 1,
          "skirt" : 4,
          "t-shirt" : 9,
          "sweater" : 1,
          "long sleeve" : 1,
          "dress top" : 4,
          "tank top" : 1
        },
        "new_clothes" : 1
      },
      {
        "name" : "KKCDY",
        "clothes" : {
          "jeans" : 2,
          "polo_shirt" : 4,
          "t-shirt" : 1,
          "shorts" : 1
        },
        "new_clothes" : 1
      }
    ];


}]);
