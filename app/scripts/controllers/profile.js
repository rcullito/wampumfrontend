'use strict';

angular.module('wampumfrontendApp')
  .controller('ProfileCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', 'profileService', function ($scope, $routeParams, $location, $cookies, authService, profileService) {

    $scope.userid = $cookies.userid;
    $scope.locationid = $cookies.locationid;

    if (_.isUndefined($scope.locationid) || $scope.locationid === "0") {
      $scope.nothingset = true;
    }

    profileService.getUserById($scope.userid)
      .success(function (user) {
        $scope.useremail = user._source.email;
      })
      .error(function (err) {
        console.log(err);
      });

    profileService.getLocationById($scope.locationid)
      .success(function (location) {
        $scope.location_details = location._source;
      })
      .error(function (err) {
        console.log(err);
      });      

      // it is being set to the string null 
      // which is why it is evaluating to true
    $scope.logout = function () {
      $cookies.userid = null;
      $cookies.userloggedin = "no";
      $cookies.locationid = "0";

      $location.url('/');
    };


    $scope.submitShipping = function (userid, locationid, item_width, item_height, address_line_1, address_line_2, city, state, zip) {

      profileService.submitShippingInfo(userid, locationid, item_width, item_height, address_line_1, address_line_2, city, state, zip)
        .success(function (data) {
          console.log(data);
          if (data) {
            $cookies.locationid = false;
            $scope.nothingset = false;
            $scope.locationid = null;
            $scope.submitted = true;
          }
        })
        .error(function (data) {
          console.log(data);
        })

    };

  }]);