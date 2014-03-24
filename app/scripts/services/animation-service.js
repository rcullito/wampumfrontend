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

  var yellowRainJacket = new Kinetic.Group({});

  var yellowRainJacketHood = new Kinetic.Shape({
    sceneFunc: function(context) {
      context.beginPath();          
      context.moveTo(40, 50);
      context.quadraticCurveTo(60, 10, 80, 50);
      context.closePath();
      context.fillStrokeShape(this);
    },
    fill: '#FBB917',
    stroke: '#FFD801',
    strokeWidth: 4
  });

   var yellowRainJacketBody = new Kinetic.Rect({
    x: 38,
    y: 52,
    width: 44,
    height: 40,
    fill: '#FFD801',
  });

  // toggles

  var yellowRainJacketLeftArm = new Kinetic.Rect({
    x: 38,
    y: 51,
    width: 15,
    height: 30,
    rotation: 45,
    fill: '#FFD801',
  });

  var yellowRainJacketRightArm = new Kinetic.Rect({
    x: 104,
    y: 72,
    width: 15,
    height: 30,
    rotation: 135,
    fill: '#FFD801',
  });

  var yellowRainJacketZipper = new Kinetic.Line({
    points: [60, 52, 60, 90],
    stroke: 'white',
    strokeWidth: 2,
    lineCap: 'round',
    lineJoin: 'round'
  });

  var shoe1 = new Kinetic.Group({});

  var shoeBody = new Kinetic.Shape({
    sceneFunc: function(context) {
      context.beginPath();          
      context.moveTo(40, 50);
      context.lineTo(90, 50);
      context.quadraticCurveTo(95, 45, 90, 40);
      context.lineTo(40, 40);
      context.closePath();
      context.fillStrokeShape(this);
    },
    fill: '#FFFFCC',
    stroke: '#ccc',
    strokeWidth: 1
  });

  var shoeSole = new Kinetic.Shape({
    sceneFunc: function(context) {
      context.beginPath();          
      context.moveTo(40, 40);
      context.lineTo(40, 25);
      context.quadraticCurveTo(50, 32, 60, 25);
      context.lineTo(90, 40);
      context.closePath();
      context.fillStrokeShape(this);
    },
    fill: 'red',
    // stroke: '#ccc',
    // strokeWidth: 1
  });

    // a black line and an off color white
  var shoeLine =  new Kinetic.Line({
    points: [40, 42, 91, 42],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
  });

  var shoe2 = new Kinetic.Group({});


    // plus 20, minus 10
    var shoeBody2 = new Kinetic.Shape({
    sceneFunc: function(context) {
      context.beginPath();          
      context.moveTo(60, 40);
      context.lineTo(110, 40);
      context.quadraticCurveTo(115, 35, 110, 30);
      context.lineTo(60, 30);
      context.closePath();
      context.fillStrokeShape(this);
    },
    fill: '#FFFFCC',
    stroke: '#ccc',
    strokeWidth: 1
  });

  var shoeSole2 = new Kinetic.Shape({
    sceneFunc: function(context) {
      context.beginPath();          
      context.moveTo(60, 30);
      context.lineTo(60, 15);
      context.quadraticCurveTo(70, 22, 80, 15);
      context.lineTo(110, 30);
      context.closePath();
      context.fillStrokeShape(this);
    },
    fill: 'red',
    // stroke: '#ccc',
    // strokeWidth: 1
  });

    // a black line and an off color white
  var shoeLine2 =  new Kinetic.Line({
    points: [60, 32, 111, 32],
    stroke: 'black',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
  });

  // now make a brown lace

  // another one which is just a rectangle with a quadratic curve

  shoe1.add(shoeBody);
  shoe1.add(shoeSole);
  shoe1.add(shoeLine);

  shoe2.add(shoeBody2);
  shoe2.add(shoeSole2);
  shoe2.add(shoeLine2);


  yellowRainJacket.add(yellowRainJacketHood);
  yellowRainJacket.add(yellowRainJacketBody);
  yellowRainJacket.add(yellowRainJacketLeftArm);
  yellowRainJacket.add(yellowRainJacketRightArm);
  yellowRainJacket.add(yellowRainJacketZipper);

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


  var shoes = new Kinetic.Group({});

  shoes.add(shoe2);
  shoes.add(shoe1);
  

  var layer = new Kinetic.Layer();

  layer.add(jeans);
  layer.add(sunglasses);
  layer.add(yellowRainJacket);
  layer.add(shoes);
  stage.add(layer);


  // ANIMATION

  var amplitude = stage.width() / 2;
  var centerX = stage.width() / 2;
  var speed = .4;
  var jeans_offset = 2200;

  // split these into functions

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

  var yellowRainJacket_offset = 6200;

  var anim3 = new Kinetic.Animation(function(frame) {
    yellowRainJacket.setX(amplitude * Math.sin((frame.time - yellowRainJacket_offset) * speed * Math.PI / 2000) + centerX);
    yellowRainJacket.setY(150 * Math.cos((frame.time - yellowRainJacket_offset) * speed * Math.PI / 2000) - 100);         
  }, layer);

  anim3.start();


  var shoes_offset = 8200;

  var anim4 = new Kinetic.Animation(function(frame) {
    shoes.setX(amplitude * Math.sin((frame.time - shoes_offset) * speed * Math.PI / 2000) + centerX);
    shoes.setY(150 * Math.cos((frame.time - shoes_offset) * speed * Math.PI / 2000) - 100);         
  }, layer);

  anim4.start();
  
  });