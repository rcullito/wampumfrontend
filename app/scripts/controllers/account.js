'use strict';

angular.module('wampumfrontendApp')
  .controller('AccountCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', function ($scope, $routeParams, $location, $cookies, authService) {

    $scope.itemid = $routeParams.itemid
    $scope.form_type = $routeParams.type;

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

    setScopeBasedOnFormType($scope.form_type);

    $scope.alternateLogin = function (form_type) {
      console.log(form_type);
      if (form_type === 'login') {
        var other_form_type = 'signup';
      } else {
        var other_form_type = 'login';
      }
      setScopeBasedOnFormType(other_form_type);
    };

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



    $scope.validate = function (form_type, email, password) {

      if (form_type === 'signup') {
        authService.signup(email, password)
          .success(function (data) {
            // if they were coming from an item page, then attach the itemid to
            // the profile
            $location.url('/profile/' + data._id)
            console.log(data);
          })
          .error(function (err) {
            alert(err);
          });
      } else {
        authService.login(email, password)
          .success(function (data) {
            // if successful login redirect them to the user home page
            if ($scope.itemid) {
              $location.url('/profile/' + data._id + '/' + $scope.itemid);
            } else {
              $location.url('/profile/' + data._id)
            }
            console.log(data);
          })
          .error(function (err) {
            alert(err);
          });
      }

    }
  }]);