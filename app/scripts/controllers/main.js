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

      // var group = new Kinetic.Group({
      //   x: 20,
      //   y: 60
      // });

      // var frameLine1 = new Kinetic.Line({
      //   points: [50, 50, 35, 35],
      //   stroke: 'black',
      //   strokeWidth: 2,
      //   lineCap: 'round',
      //   lineJoin: 'round'
      // });

      // var frameLine2 = new Kinetic.Line({
      //   points: [70, 50, 55, 35],
      //   stroke: 'black',
      //   strokeWidth: 2,
      //   lineCap: 'round',
      //   lineJoin: 'round'
      // });

      // var circle1 = new Kinetic.Circle({
      //   x: 50,
      //   y: 50,
      //   radius: 8,
      //   fill: 'black'
      // });

      // var circle2 = new Kinetic.Circle({
      //   x: 65,
      //   y: 50,
      //   radius: 8,
      //   fill: 'black'
      // });

      // group.add(circle1);
      // group.add(circle2);
      // group.add(frameLine1);
      // group.add(frameLine2);

      layer.add(jeans);
      // layer.add(group);
      stage.add(layer);



      // // in ms

      var anim = new Kinetic.Animation(function(frame) {
        jeans.setX(150 * Math.sin(frame.time * 2 * Math.PI / 2000) + 200);


        jeans.setX(150 * frame.time / 2000 + 200);

        // come up with a lodash thing in between zero and 1 here

        // console.log(Math.sin(frame.time * 2 * Math.PI / 2000));

        // console.log(frame.time);
        // console.log(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + 200);


        // jeans.setX(frame.time / period);
      }, layer);

      anim.start();

      // var tween1 = new Kinetic.Tween({
      //   node: jeans,
      //   duration: 6,
      //   x: 700,
      //   y: 30,
      //   rotation: 10
      // });

      // var tween2 = new Kinetic.Tween({
      //   node: group,
      //   duration: 6,
      //   x: 700,
      //   y: 20
      // });

      // tween1.play();
      // tween2.play();

      //  var stage = new Kinetic.Stage({
      //   container: 'kinetic',
      //   width: 578,
      //   height: 200
      // });
      // var layer = new Kinetic.Layer();

      // var hexagon = new Kinetic.RegularPolygon({
      //   x: stage.width()/2,
      //   y: stage.height()/2,
      //   sides: 6,
      //   radius: 70,
      //   fill: 'red',
      //   stroke: 'black',
      //   strokeWidth: 4
      // });

      // layer.add(hexagon);
      // stage.add(layer);

      // var amplitude = 150;
      // var period = 2000;
      // // in ms
      // var centerX = stage.width()/2;

      // var anim = new Kinetic.Animation(function(frame) {
      //   hexagon.setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);
      // }, layer);

      // anim.start();




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
