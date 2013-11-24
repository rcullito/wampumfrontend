'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, emailService) {

    $scope.show_blog = function() {
        $scope.blog = !$scope.blog;
    };

  });
