'use strict';

angular.module('wampumfrontendApp')
  .controller('ProfileCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', 'profileService', function ($scope, $routeParams, $location, $cookies, authService, profileService) {

    $scope.userid = $cookies.userid;
    $scope.itemid = $cookies.itemid;

    // get info on the user account and the item


    profileService.getUserById($scope.userid)
      .success(function (user) {
        console.log(user);
        $scope.useremail = user._source.email;
      })
      .error(function (err) {
        console.log(err);
      });




    $scope.logout = function () {
      $cookies.userid = null;
      $location.url('/');
    };

  }]);