'use strict';

angular.module('wampumfrontendApp')
  .service('animationObjectsService', function () {


    var stage = new Kinetic.Stage({
      container: 'kinetic',
      // width: 800,
      width: document.getElementById('kinetic').offsetWidth,    
      height: 200,
    });

    // split out amplitudeX into its own function that we can construct

    var jeansMetadata = {
      startingX: 0,
      startingY: 0,
      width: 60,
      height: 30,
      amplitudeX: (stage.width() / 2) - 30,
      amplitudeY: stage.height() - 15,
      centerY: -15
    };

    var jeansKinetic = new Kinetic.Line({
      points: [ jeansMetadata.startingX - 20, jeansMetadata.startingY - 15,
              jeansMetadata.startingX - 30, jeansMetadata.startingY + 15,
                jeansMetadata.startingX - 10, jeansMetadata.startingY + 15,
                jeansMetadata.startingX + 0, jeansMetadata.startingY - 5,
                jeansMetadata.startingX + 10, jeansMetadata.startingY + 15,
                jeansMetadata.startingX + 30, jeansMetadata.startingY + 15,
                jeansMetadata.startingX + 20, jeansMetadata.startingY - 15 ],
      fill: '#00D2FF',
      strokeWidth: 5,
      closed: true
    });

    var jeans = {
      metadata: jeansMetadata,
      kinetic: jeansKinetic
    };

  // this type of thing should grow up to become metadata that the animation function can read in
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.hal_year = this.year / 2;
  }

  var mycar = new Car("Eagle", "Talon TSi", 1994);

  console.log(mycar);

  var sunglassesStartingPoint = {
    xOffset: 35,    
    yOffset: 35,


    x: -54,
    y: -46,
  };
  // rough width for sunglasses is leftmost edge of the frame line to the rightmost edge of the right circle
  // leftmost edge is 35, rightmost edge is 73, 
  // total width is 38, starting point is 35
  // so starting x shoudl be 35 + 19, or -54

  // rought height for the sunglasses is starts at 35, all the way down to 58
  // height is 23, starting point is at 35
  // so y offset is 35 plus half of 23, or 35 + 11, or -46


  var sunglasses = new Kinetic.Group({});

  var frameLine1 = new Kinetic.Line({
    points: [ sunglassesStartingPoint.x + 50, sunglassesStartingPoint.y + 50, sunglassesStartingPoint.x + 35, sunglassesStartingPoint.y + 35 ],
    stroke: 'black',
    strokeWidth: 2,
    lineCap: 'round',
    lineJoin: 'round'
  });

  var frameLine2 = new Kinetic.Line({
    points: [sunglassesStartingPoint.x + 70, sunglassesStartingPoint.y + 50, sunglassesStartingPoint.x + 55, sunglassesStartingPoint.y + 35],
    stroke: 'black',
    strokeWidth: 2,
    lineCap: 'round',
    lineJoin: 'round'
  });

  var circle1 = new Kinetic.Circle({
    x: sunglassesStartingPoint.x + 50,
    y: sunglassesStartingPoint.y + 50,
    radius: 8,
    fill: 'black'
  });

  var circle2 = new Kinetic.Circle({
    x: sunglassesStartingPoint.x + 65,
    y: sunglassesStartingPoint.y + 50,
    radius: 8,
    fill: 'black'
  });

  sunglasses.add(circle1);
  sunglasses.add(circle2);
  sunglasses.add(frameLine1);
  sunglasses.add(frameLine2);

  var yellowRainJacket = new Kinetic.Group({});

  // we need to get it right on the 0,0, the starting point minus half the width and half the height
  // rightmost edge is 
  // leftmost edge of the left arm 38, and top of the hood 10
  // total height is rect plus hood height 40 + 40
  var yellowRainJacketStartingPoint = {
    x: -60,
    y: -60,
  };

  //   var yellowRainJacketStartingPoint = {
  //   x: 0,
  //   y: 0,
  // };

  var yellowRainJacketHood = new Kinetic.Shape({
    sceneFunc: function(context) {
      context.beginPath();          
      context.moveTo(yellowRainJacketStartingPoint.x + 40, yellowRainJacketStartingPoint.y + 50);
      context.quadraticCurveTo(yellowRainJacketStartingPoint.x + 60, yellowRainJacketStartingPoint.y + 10, yellowRainJacketStartingPoint.x + 80, yellowRainJacketStartingPoint.y + 50);
      context.closePath();
      context.fillStrokeShape(this);
    },
    fill: '#FBB917',
    stroke: '#FFD801',
    strokeWidth: 4
  });

   var yellowRainJacketBody = new Kinetic.Rect({
    x: yellowRainJacketStartingPoint.x + 38,
    y: yellowRainJacketStartingPoint.y + 52,
    width: 44,
    height: 40,
    fill: '#FFD801',
  });

  // toggles

  var yellowRainJacketLeftArm = new Kinetic.Rect({
    x: yellowRainJacketStartingPoint.x + 38,
    y: yellowRainJacketStartingPoint.y + 51,
    width: 15,
    height: 30,
    rotation: 45,
    fill: '#FFD801',
  });

  var yellowRainJacketRightArm = new Kinetic.Rect({
    x: yellowRainJacketStartingPoint.x + 104,
    y: yellowRainJacketStartingPoint.y + 72,
    width: 15,
    height: 30,
    rotation: 135,
    fill: '#FFD801',
  });

  var yellowRainJacketZipper = new Kinetic.Line({
    points: [yellowRainJacketStartingPoint.x + 60, yellowRainJacketStartingPoint.y + 52, yellowRainJacketStartingPoint.x + 60, yellowRainJacketStartingPoint.y + 90],
    stroke: 'white',
    strokeWidth: 2,
    lineCap: 'round',
    lineJoin: 'round'
  });

  yellowRainJacket.add(yellowRainJacketHood);
  yellowRainJacket.add(yellowRainJacketBody);
  yellowRainJacket.add(yellowRainJacketLeftArm);
  yellowRainJacket.add(yellowRainJacketRightArm);
  yellowRainJacket.add(yellowRainJacketZipper);


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

  var shoeLine =  new Kinetic.Line({
    points: [40, 42, 91, 42],
    stroke: '#000066',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
  });

  var shoe2 = new Kinetic.Group({});

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

  var shoeLine2 =  new Kinetic.Line({
    points: [60, 32, 111, 32],
    stroke: '#000066',
    strokeWidth: 1,
    lineCap: 'round',
    lineJoin: 'round'
  });

  shoe1.add(shoeBody);
  shoe1.add(shoeSole);
  shoe1.add(shoeLine);

  shoe2.add(shoeBody2);
  shoe2.add(shoeSole2);
  shoe2.add(shoeLine2);

  var shoes = new Kinetic.Group({});

  shoes.add(shoe2);
  shoes.add(shoe1);

    return {
      stage: stage,
      jeans: jeans,
      yellowRainJacket: yellowRainJacket,
      sunglasses: sunglasses,
      shoes: shoes,
    };

  });