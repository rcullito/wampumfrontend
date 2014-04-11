'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, esService, animationService) {

    $scope.showAbout = function () {
      $location.path('/');
    };

    $scope.motion = true;
    var urlSearchParams = $location.search();

    if (urlSearchParams.search) {
      var term = urlSearchParams.search;
      $location.search('search', term);

      esService.prefixQuery('stuff', term)
        .success(function (results) {
          $scope.resultObjects = results;
          $scope.motion = false;
          $location.search('search', term);
        })
        .error(function (err) {
          console.log(err);
        });
    };

  	$scope.search = function(term) {

      $location.search('search', term);

      esService.prefixQuery('stuff', term)
        .success(function (results) {
          $scope.resultObjects = results;
          $scope.motion = false;
          $location.search('search', term);
        })
        .error(function (err) {
          console.log(err);
        });
  	};
});
