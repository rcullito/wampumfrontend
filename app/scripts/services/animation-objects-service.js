'use strict';

angular.module('wampumfrontendApp')
  .service('animationObjectsService', function () {


    var stage = new Kinetic.Stage({
      container: 'kinetic',
      width: document.getElementById('kinetic').offsetWidth,    
      height: 200,
    });

    var metaData = function (width, height, offsetX, offsetY) {
      this.startingX = 0 - offsetX - (width / 2),
      this.startingY = 0 - offsetY - (height / 2),
      this.width = width,
      this.height = height,
      this.amplitudeX = (stage.width() / 2) - this.width / 2,
      this.amplitudeY = stage.height() - this.height / 2,
      this.centerY = 0 - (this.height / 2)
    };

    var jeansMetadata = new metaData(60, 30, -30, -15);
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

    var sunglassesMetadata = new metaData(38, 23, 35, 35);
    var sunglassesKinetic = new Kinetic.Group({});

    var frameLine1 = new Kinetic.Line({
      points: [ sunglassesMetadata.startingX + 50, sunglassesMetadata.startingY + 50, sunglassesMetadata.startingX + 35, sunglassesMetadata.startingY + 35 ],
      stroke: 'black',
      strokeWidth: 2,
      lineCap: 'round',
      lineJoin: 'round'
    });

    var frameLine2 = new Kinetic.Line({
      points: [sunglassesMetadata.startingX + 70, sunglassesMetadata.startingY + 50, sunglassesMetadata.startingX + 55, sunglassesMetadata.startingY + 35],
      stroke: 'black',
      strokeWidth: 2,
      lineCap: 'round',
      lineJoin: 'round'
    });

    var circle1 = new Kinetic.Circle({
      x: sunglassesMetadata.startingX + 50,
      y: sunglassesMetadata.startingY + 50,
      radius: 8,
      fill: 'black'
    });

    var circle2 = new Kinetic.Circle({
      x: sunglassesMetadata.startingX + 65,
      y: sunglassesMetadata.startingY + 50,
      radius: 8,
      fill: 'black'
    });

    sunglassesKinetic.add(circle1);
    sunglassesKinetic.add(circle2);
    sunglassesKinetic.add(frameLine1);
    sunglassesKinetic.add(frameLine2);

    var sunglasses = {
      metadata: sunglassesMetadata,
      kinetic: sunglassesKinetic      
    };

    var yellowRainJacketMetadata = new metaData(76, 80, 22, 10);
    var yellowRainJacketKinetic = new Kinetic.Group({});
    var yellowRainJacketHood = new Kinetic.Shape({
      sceneFunc: function(context) {
        context.beginPath();          
        context.moveTo(yellowRainJacketMetadata.startingX + 40, yellowRainJacketMetadata.startingY + 50);
        context.quadraticCurveTo(yellowRainJacketMetadata.startingX + 60, yellowRainJacketMetadata.startingY + 10, yellowRainJacketMetadata.startingX + 80, yellowRainJacketMetadata.startingY + 50);
        context.closePath();
        context.fillStrokeShape(this);
      },
      fill: '#FBB917',
      stroke: '#FFD801',
      strokeWidth: 4
    });

     var yellowRainJacketBody = new Kinetic.Rect({
      x: yellowRainJacketMetadata.startingX + 38,
      y: yellowRainJacketMetadata.startingY + 52,
      width: 44,
      height: 40,
      fill: '#FFD801',
    });

    var yellowRainJacketLeftArm = new Kinetic.Rect({
      x: yellowRainJacketMetadata.startingX + 38,
      y: yellowRainJacketMetadata.startingY + 51,
      width: 15,
      height: 30,
      rotation: 45,
      fill: '#FFD801',
    });

    var yellowRainJacketRightArm = new Kinetic.Rect({
      x: yellowRainJacketMetadata.startingX + 104,
      y: yellowRainJacketMetadata.startingY + 72,
      width: 15,
      height: 30,
      rotation: 135,
      fill: '#FFD801',
    });

    var yellowRainJacketZipper = new Kinetic.Line({
      points: [yellowRainJacketMetadata.startingX + 60, yellowRainJacketMetadata.startingY + 52, yellowRainJacketMetadata.startingX + 60, yellowRainJacketMetadata.startingY + 90],
      stroke: 'white',
      strokeWidth: 2,
      lineCap: 'round',
      lineJoin: 'round'
    });
    yellowRainJacketKinetic.add(yellowRainJacketHood);
    yellowRainJacketKinetic.add(yellowRainJacketBody);
    yellowRainJacketKinetic.add(yellowRainJacketLeftArm);
    yellowRainJacketKinetic.add(yellowRainJacketRightArm);
    yellowRainJacketKinetic.add(yellowRainJacketZipper);
    var yellowRainJacket = {
      metadata: yellowRainJacketMetadata,
      kinetic: yellowRainJacketKinetic      
    };

    var shoesMetadata = new metaData(75, 35, 40, 15);

    var lowerShoe = new Kinetic.Group({});

    var lowerShoeSole = new Kinetic.Shape({
      sceneFunc: function(context) {
        context.beginPath();          
        context.moveTo(shoesMetadata.startingX + 40, shoesMetadata.startingY + 50);
        context.lineTo(shoesMetadata.startingX + 90, shoesMetadata.startingY + 50);
        context.quadraticCurveTo(shoesMetadata.startingX + 95, shoesMetadata.startingY + 45, shoesMetadata.startingX + 90, shoesMetadata.startingY + 40);
        context.lineTo(shoesMetadata.startingX + 40, shoesMetadata.startingY + 40);
        context.closePath();
        context.fillStrokeShape(this);
      },
      fill: '#FFFFCC',
      stroke: '#ccc',
      strokeWidth: 1
    });

    var lowerShoeBody = new Kinetic.Shape({
      sceneFunc: function(context) {
        context.beginPath();          
        context.moveTo(shoesMetadata.startingX + 40, shoesMetadata.startingY + 40);
        context.lineTo(shoesMetadata.startingX + 40, shoesMetadata.startingY + 25);
        context.quadraticCurveTo(shoesMetadata.startingX + 50, shoesMetadata.startingY + 32, shoesMetadata.startingX + 60, shoesMetadata.startingY + 25);
        context.lineTo(shoesMetadata.startingX + 90, shoesMetadata.startingY + 40);
        context.closePath();
        context.fillStrokeShape(this);
      },
      fill: 'red',
    });

    var lowerShoeLine =  new Kinetic.Line({
      points: [shoesMetadata.startingX + 40, shoesMetadata.startingY + 42, shoesMetadata.startingX + 91, shoesMetadata.startingY + 42],
      stroke: '#000066',
      strokeWidth: 1,
      lineCap: 'round',
      lineJoin: 'round'
    });

    var topShoe = new Kinetic.Group({});

    var toplowerShoeSole = new Kinetic.Shape({
      sceneFunc: function(context) {
        context.beginPath();          
        context.moveTo(shoesMetadata.startingX + 60, shoesMetadata.startingY + 40);
        context.lineTo(shoesMetadata.startingX + 110, shoesMetadata.startingY + 40);
        context.quadraticCurveTo(shoesMetadata.startingX + 115, shoesMetadata.startingY + 35, shoesMetadata.startingX + 110, shoesMetadata.startingY + 30);
        context.lineTo(shoesMetadata.startingX + 60, shoesMetadata.startingY + 30);
        context.closePath();
        context.fillStrokeShape(this);
      },
      fill: '#FFFFCC',
      stroke: '#ccc',
      strokeWidth: 1
    });

    var toplowerShoeBody = new Kinetic.Shape({
      sceneFunc: function(context) {
        context.beginPath();          
        context.moveTo(shoesMetadata.startingX + 60, shoesMetadata.startingY + 30);
        context.lineTo(shoesMetadata.startingX + 60, shoesMetadata.startingY + 15);
        context.quadraticCurveTo(shoesMetadata.startingX + 70, shoesMetadata.startingY + 22, shoesMetadata.startingX + 80, shoesMetadata.startingY + 15);
        context.lineTo(shoesMetadata.startingX + 110, shoesMetadata.startingY + 30);
        context.closePath();
        context.fillStrokeShape(this);
      },
      fill: 'red',
    });

    var toplowerShoeLine =  new Kinetic.Line({
      points: [shoesMetadata.startingX + 60, shoesMetadata.startingY + 32, shoesMetadata.startingX + 111, shoesMetadata.startingY + 32],
      stroke: '#000066',
      strokeWidth: 1,
      lineCap: 'round',
      lineJoin: 'round'
    });

    lowerShoe.add(lowerShoeBody);
    lowerShoe.add(lowerShoeSole);
    lowerShoe.add(lowerShoeLine);

    topShoe.add(toplowerShoeBody);
    topShoe.add(toplowerShoeSole);
    topShoe.add(toplowerShoeLine);

    var shoesKinetic = new Kinetic.Group({});
    shoesKinetic.add(topShoe);
    shoesKinetic.add(lowerShoe);

    var shoes = {
      metadata: shoesMetadata,
      kinetic: shoesKinetic
    };

    var umbrellaStem = new Kinetic.Line({
      points: [110, 30, 110, 70],
      stroke: '#ccc',
      strokeWidth: 3,
      lineCap: 'square',
      lineJoin: 'square'
    });

    var umbrellaHandle = new Kinetic.Line({
      points: [110,70,120,80,130,70],
      stroke: 'black',
      strokeWidth: 3,
      lineCap: 'square',
      tension: 0.9
    });


    return {
      stage: stage,
      jeans: jeans,
      sunglasses: sunglasses,      
      yellowRainJacket: yellowRainJacket,
      shoes: shoes,
      umbrellaStem: umbrellaStem,
      umbrellaHandle: umbrellaHandle
    };

  });