'use strict';

angular.module('wampumfrontendApp')
  .controller('ProfileCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', 'profileService', function ($scope, $routeParams, $location, $cookies, authService, profileService) {

    $scope.userid = $cookies.userid;
    $scope.locationid = $cookies.locationid;

    console.log($scope.locationid);

    if ($scope.locationid || _.isUndefined($scope.locationid)) {
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

    $scope.logout = function () {
      $cookies.userid = null;
      $location.url('/');
    };

    $scope.display_message = 

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