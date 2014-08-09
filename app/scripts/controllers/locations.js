'use strict';

angular.module('wampumfrontendApp')
  .controller('LocationsCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'locationsService', function ($scope, $routeParams, $location, $cookies, locationsService) {

    locationsService.locations()
      .success(function (data) {
        $scope.locations = data;
      })
      .error(function (err) {
        console.log(err);
      })

}]);
