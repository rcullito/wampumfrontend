'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, disqusService) {

  	disqusService.loadDisqus()

    $scope.show_blog = function() {
        $scope.blog = !$scope.blog;
    };

});
