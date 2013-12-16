'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, esQueryService, disqusService) {

    var path = $location.path().split('/');
    var suburl = _.last(path);
    console.log(suburl);

    var sub_urls = ['about', 'how', 'mail', 'blog', '1'];

    if (_.contains(sub_urls), suburl) {
      $scope.suburl = suburl;
    } else {
      $scope.suburl = 'about';
    }

    if ($scope.suburl === '1') {
      disqusService.loadDisqus();
    }

  	
  	$scope.search = function(term) {
  		esQueryService.prefixQuery('organizations', term)
  			.success(function(data) {
  				$scope.results = data;
          $scope.suburl = undefined;
  			});
  	};

    $scope.takeAction = function(action) {
      alert('whoops, this feature is coming soon!');
    }


});
