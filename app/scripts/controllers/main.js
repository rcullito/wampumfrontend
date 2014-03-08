'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $sce, $window, $routeParams, $location, esService, blogService, disqusService) {

    var path = $location.path().split('/');
    var suburl = _.last(path);
    // console.log(suburl);


    blogService.blogTitle('The_Winter_Olympics_2.23.14', function (err, blog) {
      // $scope.blog = blog;
      $scope.blog = $sce.trustAsHtml(blog);
    });

    blogService.blogList(function (err, blogs) {
      $scope.blogs = blogs;
    });

    if (suburl === 'blog') {
      $scope.suburl = 'blog';
      disqusService.loadDisqus();
    } else if (!suburl || suburl === 'about') {
      $scope.suburl = 'about';
    }


  	$scope.search = function(term) {
      esService.prefixQuery('organizations', term)
        .success(function(data) {

          $scope.results = data;
          console.log($scope.results);
          $scope.suburl = undefined;
        });
  	};
});
