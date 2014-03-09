'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $sce, $window, $routeParams, $location, esService, blogService, disqusService) {

    
    // Blogs
    var showTitle = 'The_Winter_Olympics_2.23.14'
    blogService.blogTitle(showTitle, function (err, blog) {
      $scope.blog = $sce.trustAsHtml(blog);
    });
    blogService.blogList(function (err, blogs) {
      $scope.blogs = blogs;
    });
    $scope.showTitle = function (title) {
      blogService.blogTitle(title, function (err, blog) {
        $scope.blog = $sce.trustAsHtml(blog);
        $scope.$apply();
      });
    };

    // Routing
    $scope.suburl = 'about';
    $scope.showabout = function () {
      $scope.suburl = 'about';
    };
    $scope.showblog = function () {
      $scope.suburl = 'blog';
      disqusService.loadDisqus();
    };
    // $scope.$watch('suburl', function(newVal, oldVal) {
    //   console.log(newVal);
    // });

      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.moveTo(60, 30);
      context.lineTo(52, 60);
      context.lineWidth = 9;
      context.strokeStyle = 'blue';
      context.stroke();

      context.beginPath();
      context.moveTo(64, 30);
      context.lineTo(68, 60);
      context.lineWidth = 9;
      context.strokeStyle = 'blue';
      context.stroke();







    // Search
  	$scope.search = function(term) {
      esService.prefixQuery('organizations', term)
        .success(function(data) {

          $scope.results = data;
          console.log($scope.results);
          $scope.suburl = undefined;
        });
  	};
});
