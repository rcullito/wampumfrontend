'use strict';

angular.module('wampumfrontendApp')
  .controller('LoginCtrl', ['$scope', '$routeParams', '$location', 'authService', function ($scope, $routeParams, $location, authService) {

    $scope.register = function (email, password) {
      authService.register(email, password)
        .success(function (data) {
          console.log(data);
        })
        .error(function (err) {
          console.log(err);
        })
    }
  }]);