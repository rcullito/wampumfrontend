'use strict';

angular.module('wampumfrontendApp')
  .controller('BlogCtrl', function ($scope, $sce, $routeParams, $location, blogService, animationService, disqusService) {

    $scope.showAbout = function () {
      // reload animation here
      $scope.motion = true;
      $location.path('/');
    };

    var blogTitle = $routeParams.blogTitle || 'Anthropomorphism_4.3.14';

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
