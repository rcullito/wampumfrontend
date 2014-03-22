'use strict';

angular.module('wampumfrontendApp')
  .controller('BlogCtrl', function ($scope, $sce, $routeParams, $location, blogService, disqusService) {

    $scope.showAbout = function () {
      $location.path('/');
    };

    var blogTitle = $routeParams.blogTitle || 'The_Winter_Olympics_2.23.14';

    blogService.blogTitle(blogTitle, function (err, blog) {
      $scope.blog = $sce.trustAsHtml(blog);
      $scope.$apply();
      disqusService.loadDisqus();
    });


    blogService.blogList(function (err, blogs) {
      $scope.blogs = blogs;
      $scope.$apply();
    });
  
});
