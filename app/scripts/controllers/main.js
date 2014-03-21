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

      var sunglasses = new Kinetic.Group({});

      var frameLine1 = new Kinetic.Line({
        points: [50, 50, 35, 35],
        stroke: 'black',
        strokeWidth: 2,
        lineCap: 'round',
        lineJoin: 'round'
      });

      var frameLine2 = new Kinetic.Line({
        points: [70, 50, 55, 35],
        stroke: 'black',
        strokeWidth: 2,
        lineCap: 'round',
        lineJoin: 'round'
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

      sunglasses.add(circle1);
      sunglasses.add(circle2);
      sunglasses.add(frameLine1);
      sunglasses.add(frameLine2);

      layer.add(jeans);
      layer.add(sunglasses);
      stage.add(layer);

      var amplitude = stage.width() / 2;
      var centerX = stage.width() / 2;
      var speed = .4;
      var jeans_offset = 2200;

      var anim1 = new Kinetic.Animation(function(frame) {
        jeans.setX(amplitude * Math.sin((frame.time - jeans_offset) * speed * Math.PI / 2000) + centerX);
        jeans.setY(150 * Math.cos((frame.time - jeans_offset) * speed * Math.PI / 2000) - 100);
      }, layer);

      anim1.start();

      var sunglasses_offset = 4200;

      var anim2 = new Kinetic.Animation(function(frame) {
        sunglasses.setX(amplitude * Math.sin((frame.time - sunglasses_offset) * speed * Math.PI / 2000) + centerX);
        sunglasses.setY(150 * Math.cos((frame.time - sunglasses_offset) * speed * Math.PI / 2000) - 100);         
      }, layer);

      anim2.start();
  

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
