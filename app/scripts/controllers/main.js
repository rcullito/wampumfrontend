'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $location, esQueryService, disqusService) {

    var path = $location.path().split('/');
    var suburl = _.last(path);

    var sub_urls = ['about', 'how', 'mail', 'blog'];

    if (_.contains(sub_urls), suburl) {
      $scope.suburl = suburl;
    } else {
      $scope.suburl = 'about';
    }

    if ($scope.suburl === 'blog') {
      disqusService.loadDisqus();
    }

  	


  	$scope.search = function(term) {
  		esQueryService.prefixQuery(term)
  			.success(function(data) {
  				$scope.results = data;
          $scope.suburl = undefined;
  			});
  	};


});
