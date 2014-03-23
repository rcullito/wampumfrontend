'use strict';

angular.module('wampumfrontendApp')
  .service('animationService', function () {

  // OBJECTS

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

  // join together a black circle with a yellow border
  // var yellowRainJacket = new 

  // should really be a bezier curve

var triangle = new Kinetic.Shape({
        sceneFunc: function(context) {
          context.beginPath();
          // context.moveTo(250, 10);
          // context.lineTo(300, 50);
          context.moveTo(240, 50);
          context.quadraticCurveTo(260, 10, 280, 50);

          // context.quadraticCurveTo(200, 50, 300, 50);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        fill: '#FBB917',
        stroke: '#FFD801',
        strokeWidth: 4
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

  // STAGING


  var stage = new Kinetic.Stage({
    container: 'kinetic',
    width: 800,
    height: 200
  });

  var layer = new Kinetic.Layer();

  layer.add(jeans);
  layer.add(sunglasses);
  layer.add(triangle);
  stage.add(layer);

  // ANIMATION

  var amplitude = stage.width() / 2;
  var centerX = stage.width() / 2;
  var speed = .4;
  var jeans_offset = 2200;

  var anim1 = new Kinetic.Animation(function(frame) {
    jeans.setX(amplitude * Math.sin((frame.time - jeans_offset) * speed * Math.PI / 2000) + centerX);
    jeans.setY(150 * Math.cos((frame.time - jeans_offset) * speed * Math.PI / 2000) - 100);
  }, layer);

  // anim1.start();

  var sunglasses_offset = 4200;

  var anim2 = new Kinetic.Animation(function(frame) {
    sunglasses.setX(amplitude * Math.sin((frame.time - sunglasses_offset) * speed * Math.PI / 2000) + centerX);
    sunglasses.setY(150 * Math.cos((frame.time - sunglasses_offset) * speed * Math.PI / 2000) - 100);         
  }, layer);

  // anim2.start();
  
  });