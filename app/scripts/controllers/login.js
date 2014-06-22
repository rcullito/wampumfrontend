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

    // actually dont have two places where we have user state

    // have an api to get this from the server side

    // have sign up button default to register

    // have free shipping button default to log in

    console.log($routeParams);

    if ($routeParams.type === 'login') {
      $scope.form_name = 'Login';
      $scope.alternate = 'New to Wampum? Signing up takes a second!'
      $scope.alternate_button = 'Sign Up';
    } else {
      $scope.form_name = 'Sign Up';
      $scope.alternate = 'Already a member? Login here.'
      $scope.alternate_button = 'Login';
    }

    // now provide affordance for the other one, which will basically just be an ng-click function

    authService.checkLoginStatus()
      .success(function (data) {

        if (_.isEmpty(data)) {
          console.log('user is not logged in');
          // if they are not logged in, have them either register or login
        } else {
          console.log('user is logged in as: ' + data.email);
        }
      })
      .error(function (err) {
        console.log(err);
      });



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