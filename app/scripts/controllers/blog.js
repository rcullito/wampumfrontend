'use strict';

angular.module('wampumfrontendApp')
  .controller('BlogCtrl', function ($scope, $sce, $window, $routeParams, $location, esService, blogService, disqusService) {

    var path = $location.path().split('/');
    var suburl = _.last(path);

    $scope.suburl = suburl || 'blog';

    var showTitle = 'The_Winter_Olympics_2.23.14';


    $scope.showTitle = function (title) {
      blogService.blogTitle(title, function (err, blog) {
        $scope.blog = $sce.trustAsHtml(blog);
        $scope.$apply();
      });
    };


    blogService.blogTitle(showTitle, function (err, blog) {
      $scope.blog = $sce.trustAsHtml(blog);
    });

    blogService.blogList(function (err, blogs) {
      $scope.blogs = blogs;
    });


    disqusService.loadDisqus();


  	$scope.search = function(term) {
      esService.prefixQuery('organizations', term)
        .success(function(data) {

          $scope.results = data;
          console.log($scope.results);
          $scope.suburl = undefined;
        });
  	};
});
