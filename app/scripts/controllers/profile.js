'use strict';

angular.module('wampumfrontendApp')
  .controller('ProfileCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', 'profileService', function ($scope, $routeParams, $location, $cookies, authService, profileService) {

    $scope.userid = $cookies.userid;
    $scope.locationid = $cookies.locationid;

    profileService.getUserById($scope.userid)
      .success(function (user) {
        $scope.useremail = user._source.email;
      })
      .error(function (err) {
        console.log(err);
      });

    profileService.getLocationById($scope.locationid)
      .success(function (location) {
        console.log(location);
        $scope.location_details = location._source;
      })
      .error(function (err) {
        console.log(err);
      });      

    $scope.logout = function () {
      $cookies.userid = null;
      $location.url('/');
    };


    $scope.submitShipping = function () {
      alert('submitted');
    };

  }]);