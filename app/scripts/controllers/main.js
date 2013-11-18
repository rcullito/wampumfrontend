'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, emailService) {
    $scope.request = "pending";

    $scope.update = function() {
        $scope.request = "underway";
    };

    $scope.submitEmail = function(current_email) {
      alert(current_email);
      $scope.request = "completed";
    }


  });
