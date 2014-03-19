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
      var stage = new Kinetic.Stage({
        container: 'kinetic',
        width: 578,
        height: 200
      });

      var layer = new Kinetic.Layer();

      var poly = new Kinetic.Line({
        // x y, x y, 
        points: [ 30, 30, // starting point
                  20, 60, // left leg
                  40, 60, // right cuff of left leg
                  50, 40, // crotch
                  60, 60, // left cuff of right leg
                  80, 60, // right cuff of right leg
                  70, 30 ], // right waist
        fill: '#00D2FF',
        strokeWidth: 5,
        closed: true
      });

      layer.add(poly);
      stage.add(layer);

      var tween = new Kinetic.Tween({
        node: poly,
        duration: 3,
        x: 400,
        y: 30,
        rotation: 360
      });

      setTimeout(function() {
        tween.play();
      }, 1000);



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
