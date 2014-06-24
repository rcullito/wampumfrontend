'use strict';

angular.module('wampumfrontendApp')
  .controller('AccountCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', function ($scope, $routeParams, $location, $cookies, authService) {

    if ($routeParams.itemid) {
      $cookies.itemid = $routeParams.itemid;
    }

    if ($cookies.userid !== "null") {
      $location.url('/profile')
    }

    var setScopeBasedOnFormType = function (form_type) {
      $scope.form_type = form_type;
      if (form_type === 'login') {
        $scope.form_name = 'Login';
        $scope.alternate = 'New to Wampum? Signing up takes a second!'
        $scope.alternate_button = 'Sign Up';
      } else {
        $scope.form_name = 'Sign Up';
        $scope.alternate = 'Already a member? Login here.'
        $scope.alternate_button = 'Login';
        $routeParams.type = 'login';
      }
    };

    $scope.setFormType = function (form_type) {
      $scope.form_type = form_type;
      setScopeBasedOnFormType(form_type);
    }

    $scope.alternateLogin = function (form_type) {
      if (form_type === 'login') {
        var other_form_type = 'signup';
      } else {
        var other_form_type = 'login';
      }
      setScopeBasedOnFormType(other_form_type);
    };

    $scope.validate = function (form_type, email, password) {

      if (form_type === 'signup') {
        authService.signup(email, password)
          .success(function (data) {
            $cookies.userid = data._id;
            $location.url('/profile')
          })
          .error(function (err) {
            alert(err);
          });
      } else {
        authService.login(email, password)
          .success(function (data) {
            $cookies.userid = data._id;
            $location.url('/profile')
          })
          .error(function (err) {
            alert(err);
          });
      }

    }
  }]);