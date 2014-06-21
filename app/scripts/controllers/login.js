'use strict';

angular.module('wampumfrontendApp')
  .controller('LoginCtrl', ['$scope', '$routeParams', '$location', 'authService', function ($scope, $routeParams, $location, authService) {

    // users are brought here from the sign up button and also
    // from the free shipping button
    // so the first thing we need to know is if they are already logged
    // in

    // if they are then they should have passed along query params

    // if they are refreshing this page they will have come from express
    // rather than angular routing though

    console.log($routeParams);

    $scope.register = function (email, password) {
      authService.register(email, password)
        .success(function (data) {
          $location.url('/signedup')
          console.log(data);
        })
        .error(function (err) {
          console.log(err);
          alert('There was an error registering. Please try again')
        })
    }
  }]);