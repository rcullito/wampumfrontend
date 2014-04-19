'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, esService) {

    $scope.showAbout = function () {
      $scope.motion = true;
      $scope.resultObjects = null;
      $location.url($location.path());
    };

    $scope.motion = true;
    var urlSearchParams = $location.search();

    if (urlSearchParams.search) {
      var term = urlSearchParams.search;
      $location.search('search', term);
      $scope.term = term;
      esService.prefixQuery('stuff', term)
        .success(function (results) {
          $scope.resultObjects = results;
          $scope.motion = false;
          $location.search('search', term);
        })
        .error(function (err) {
          console.log(err);
        });
    };

    $scope.search = function(term) {

      $location.search('search', term);

      esService.prefixQuery('stuff', term)
        .success(function (results) {
          $scope.resultObjects = results;
          $scope.motion = false;
          $location.search('search', term);
        })
        .error(function (err) {
          console.log(err);
        });
    };

    // BEGINNING OF TYPEAHEAD STUFF

    $('#scrollable-dropdown-menu .typeahead').on("typeahead:opened", function () {
      alert('here we go');
    });

    // manually set width of .tt-dropdown-menu
    var skyfall = $('#skyfall').css('width');
    console.log(skyfall);
    // $('#quantum').css('width', 559);

    // potentially get or set this on keystroke
    var quantum = $('#quantum').css('width');

    console.log(quantum);
    // might just want to set the css here
    // $input.css('border-top-left-radius', '6px');

 
      var engine = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('tag'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 10,
        prefetch: {
          url: '/autocomplete',
          filter: function(res) {
            return res;
          }
        }
      });

      engine.initialize();

      $('#scrollable-dropdown-menu .typeahead').typeahead({
        minLength: 1,
        highlight: false,
      }, {
        name: 'engine',
        displayKey: 'tag',
        source: engine.ttAdapter()
      });




    // BEGINNING OF A TON OF ANIMATION

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
    var jeansKinetic = new Kinetic.Group({});
    var jeansMain = new Kinetic.Line({
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

    var jeansButton = new Kinetic.Circle({
      x: jeansMetadata.startingX,
      y: jeansMetadata.startingY - 10,
      radius: 2,
      fill: '#ffd700',
      stroke: '#ffd700',
      strokeWidth: 1
    });

    var jeansLeftCuff = new Kinetic.Rect({
      x: jeansMetadata.startingX  - 30,
      y: jeansMetadata.startingY + 10,
      width: 22,
      height: 5,
      fill: '80e3f7',
    });

    var jeansRightCuff = new Kinetic.Rect({
      x: jeansMetadata.startingX  + 8,
      y: jeansMetadata.startingY + 10,
      width: 22,
      height: 5,
      fill: '80e3f7',
    });

    jeansKinetic.add(jeansMain);
    jeansKinetic.add(jeansButton);
    jeansKinetic.add(jeansLeftCuff);
    jeansKinetic.add(jeansRightCuff);

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

    var umbrellaMetadata = new metaData(60, 78, 80, 20);
    var umbrellaKinetic = new Kinetic.Group({});

    var umbrellaStem = new Kinetic.Line({
      points: [umbrellaMetadata.startingX + 110, umbrellaMetadata.startingY + 70, umbrellaMetadata.startingX + 110, umbrellaMetadata.startingY + 90],
      stroke: '#ccc',
      strokeWidth: 3,
      lineCap: 'square',
      lineJoin: 'square'
    });

    var umbrellaHandle = new Kinetic.Line({
      points: [umbrellaMetadata.startingX + 110,umbrellaMetadata.startingY + 90,umbrellaMetadata.startingX + 115,umbrellaMetadata.startingY + 98,umbrellaMetadata.startingX + 120,umbrellaMetadata.startingY + 90],
      stroke: 'black',
      strokeWidth: 3,
      lineCap: 'square',
      tension: 0.9
    });

    var umbrellaCanvas =  new Kinetic.Shape({
      sceneFunc: function(context) {
        context.beginPath(); 
        context.moveTo(umbrellaMetadata.startingX + 140, umbrellaMetadata.startingY + 70);
        context.quadraticCurveTo(umbrellaMetadata.startingX + 130, umbrellaMetadata.startingY + 65, umbrellaMetadata.startingX + 120, umbrellaMetadata.startingY + 70);
        context.quadraticCurveTo(umbrellaMetadata.startingX + 110, umbrellaMetadata.startingY + 65, umbrellaMetadata.startingX + 100, umbrellaMetadata.startingY + 70);
        context.quadraticCurveTo(umbrellaMetadata.startingX + 90, umbrellaMetadata.startingY + 65, umbrellaMetadata.startingX + 80, umbrellaMetadata.startingY + 70);
        context.quadraticCurveTo(umbrellaMetadata.startingX + 110, umbrellaMetadata.startingY + 25, umbrellaMetadata.startingX + 140, umbrellaMetadata.startingY + 70);
        context.closePath();
        context.fillStrokeShape(this);
      },
      fill: '#551A8B',
      stroke: '#551A8B',
      strokeWidth: 4
    });

    umbrellaKinetic.add(umbrellaCanvas);
    umbrellaKinetic.add(umbrellaStem);
    umbrellaKinetic.add(umbrellaHandle);

    var umbrella = {
      metadata: umbrellaMetadata,
      kinetic: umbrellaKinetic
    };

    var wateringCanMetadata = new metaData(50, 50, 38, 70);
    // var wateringCanMetadata = new metaData(50, 50, -100, -100);

    var wateringCanHead = new Kinetic.Shape({
      sceneFunc: function(context) { 
        context.beginPath();          
        context.moveTo(wateringCanMetadata.startingX  + 38, wateringCanMetadata.startingY + 79 );
        context.lineTo(wateringCanMetadata.startingX  + 42, wateringCanMetadata.startingY + 76);
        context.lineTo(wateringCanMetadata.startingX  + 39, wateringCanMetadata.startingY + 70);
        context.lineTo(wateringCanMetadata.startingX  + 33, wateringCanMetadata.startingY + 75);
        context.closePath();
        context.fillStrokeShape(this);
      },
      fill: '#4A7023',
    });

    // have deeper green oval along top

    var wateringCanStem = new Kinetic.Line({
      points: [wateringCanMetadata.startingX + 60, wateringCanMetadata.startingY + 105, wateringCanMetadata.startingX + 39, wateringCanMetadata.startingY + 76],
      stroke: '#4A7023',
      strokeWidth: 4,
    });

    // one well placed quadratic curve

    var wateringCanSupport = new Kinetic.Line({
      points: [wateringCanMetadata.startingX + 60, wateringCanMetadata.startingY + 80, wateringCanMetadata.startingX + 43, wateringCanMetadata.startingY + 81],
      stroke: '#4A7023',
      strokeWidth: 3,
    });

    var wateringCanHandle =  new Kinetic.Shape({
      sceneFunc: function(context) {
        context.beginPath(); 
        context.moveTo(wateringCanMetadata.startingX + 60, wateringCanMetadata.startingY  + 72);
        context.quadraticCurveTo(wateringCanMetadata.startingX + 90, wateringCanMetadata.startingY + 50, wateringCanMetadata.startingX + 90, wateringCanMetadata.startingY + 92);
        context.closePath();
        context.fillStrokeShape(this);
      },
      lineCap: 'round',
      stroke: '#4A7023',
      strokeWidth: 4
    });

    var wateringCanKinetic = new Kinetic.Group({});
    var wateringCanBody = new Kinetic.Rect({
      x: wateringCanMetadata.startingX + 58,
      y: wateringCanMetadata.startingY + 72,
      width: 30,
      height: 40,
      cornerRadius: 4,
      fill: '#4A7023',
    });

    var wateringCanShadow = new Kinetic.Rect({
      x: wateringCanMetadata.startingX + 60,
      y: wateringCanMetadata.startingY + 74,
      width: 30,
      height: 4,
      cornerRadius: 4,
      fill: '#3D5229',
    });

    wateringCanKinetic.add(wateringCanBody);
    wateringCanKinetic.add(wateringCanStem);
    wateringCanKinetic.add(wateringCanHead);
    wateringCanKinetic.add(wateringCanSupport);
    wateringCanKinetic.add(wateringCanHandle);
    wateringCanKinetic.add(wateringCanShadow);

    var wateringCan = {
      metadata: wateringCanMetadata,
      kinetic: wateringCanKinetic
    };


    var stage = stage;
    var layer = new Kinetic.Layer();
    // layer.add(jeans.kinetic);
    // layer.add(sunglasses.kinetic);
    // layer.add(yellowRainJacket.kinetic);
    // layer.add(shoes.kinetic);
    // layer.add(umbrella.kinetic);
    // layer.add(wateringCan.kinetic);

    // document.getElementById('kinetic').style.background = 'red';

    stage.add(layer);

    var centerX = stage.width() / 2;
    var period = 12000;

    var animInput = function (item, offset, options) {
      return function(frame) {
        item.setX(options.amplitudeX * Math.sin((frame.time - offset) * 2 * Math.PI / period) + centerX);
        item.setY(options.amplitudeY * Math.cos((frame.time - offset) * 2 * Math.PI / period) + options.centerY);
      };
    };

    var jeansAnim = new Kinetic.Animation(animInput(jeans.kinetic, 0, jeans.metadata), layer);
    // jeansAnim.start();
    var sunglassesAnim = new Kinetic.Animation(animInput(sunglasses.kinetic, 2000, sunglasses.metadata), layer);
    // sunglassesAnim.start();
    var yellowRainJacketAnim = new Kinetic.Animation(animInput(yellowRainJacket.kinetic, 4000, yellowRainJacket.metadata), layer);
    // yellowRainJacketAnim.start();
    var shoesAnim = new Kinetic.Animation(animInput(shoes.kinetic, 6000, shoes.metadata), layer);
    // shoesAnim.start();
    var umbrellaAnim = new Kinetic.Animation(animInput(umbrella.kinetic, 8000, umbrella.metadata), layer);
    // umbrellaAnim.start();
    var wateringCanAnim = new Kinetic.Animation(animInput(wateringCan.kinetic, 10000, wateringCan.metadata), layer);
    // wateringCanAnim.start();
});
