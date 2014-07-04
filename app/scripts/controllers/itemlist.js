'use strict';

angular.module('wampumfrontendApp')
  .controller('ItemlistCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'cookieService', function ($scope, $routeParams, $location, $cookies, cookieService) {

    $scope.topRightMessage = cookieService.topRightMessage();

  }]);