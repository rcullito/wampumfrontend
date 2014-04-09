'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, esService, animationService) {

    $scope.showAbout = function () {
      $location.path('/');
    };

    $scope.motion = true;

  	$scope.search = function(term) {
      esService.prefixQuery('stuff', term)
        .success(function (results) {
          $scope.resultObjects = results;
          $scope.motion = false;
        })
        .error(function (err) {
          console.log(err);
        });
  	};
});
