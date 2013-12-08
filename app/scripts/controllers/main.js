'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, esQueryService, disqusService) {

  	disqusService.loadDisqus()

  	$scope.search = function(term) {
  		esQueryService.prefixQuery(term)
  			.success(function(data) {
  				console.log(data);
  			});
  	};

    $scope.show_blog = function() {
        $scope.blog = !$scope.blog;
    };


});
