'use strict';

angular.module('wampumfrontendApp')
  .controller('LoginCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', function ($scope, $routeParams, $location, $cookies, authService) {

    // users are brought here from the sign up button and also
    // from the free shipping button
    // so the first thing we need to know is if they are already logged
    // in

    // if they are then they should have passed along query params

    // if they are refreshing this page they will have come from express
    // rather than angular routing though

    console.log($routeParams);

    // so shit how do we tell from here if they are logged in
    // easy we log something when either they register or log in for the first time
    console.log($cookies);

    // with yb angular it is an all or nothing thing
    // so it is all handled in express

    // when someone registers we submit their name in the database but we
    // also set something on the request session

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