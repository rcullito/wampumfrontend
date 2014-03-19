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
        width: 800,
        height: 200
      });

      var layer = new Kinetic.Layer();

      var jeans = new Kinetic.Line({
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

      // var black_jeans = new Kinetic.Line({
      //   points: [ 30, 30, // starting point
      //             20, 60, // left leg
      //             40, 60, // right cuff of left leg
      //             50, 40, // crotch
      //             60, 60, // left cuff of right leg
      //             80, 60, // right cuff of right leg
      //             70, 30 ], // right waist
      //   fill: '#000',
      //   strokeWidth: 5,
      //   closed: true
      // });

      var group = new Kinetic.Group({
        x: 220,
        y: 40
      });

      var circle1 = new Kinetic.Circle({
        x: 50,
        y: 50,
        radius: 8,
        fill: 'black'
      });

      var circle2 = new Kinetic.Circle({
        x: 65,
        y: 50,
        radius: 8,
        fill: 'black'
      });

      group.add(circle1);
      group.add(circle2);

      layer.add(jeans);
      layer.add(group);
      stage.add(layer);

      var tween1 = new Kinetic.Tween({
        node: jeans,
        duration: 6,
        x: 700,
        y: 30,
        rotation: 10
      });

      // var tween2 = new Kinetic.Tween({
      //   node: black_jeans,
      //   duration: 6,
      //   x: 700,
      //   y: 150,
      //   rotation: 60
      // });

      setTimeout(function() {
        tween1.play();
      }, 1000);

      // setTimeout(function() {
      //   tween2.play();
      // }, 2000);


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
