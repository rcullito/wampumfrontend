'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, esService, animationService) {

    $scope.showAbout = function () {
      $location.path('/');
    };

    $scope.motion = true;

    // Search
  	$scope.search = function(term) {

      // hide animation
      $scope.motion = false;
      console.log(term);

      esService.prefixQuery('organizations', term)
        .success(function(data) {

          $scope.results = data;
          console.log($scope.results);
          $scope.suburl = undefined;
        });


  	};
});
