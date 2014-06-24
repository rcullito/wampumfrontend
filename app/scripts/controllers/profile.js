'use strict';

angular.module('wampumfrontendApp')
  .controller('ProfileCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', function ($scope, $routeParams, $location, $cookies, authService) {

    $scope.userid = $cookies.userid;
    $scope.itemid = $cookies.itemid;

    // get info on the user account and the item
    $scope.logout = function () {
      $cookies.userid = null;
      $location.url('/');
    };

  }]);