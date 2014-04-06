'use strict';

angular.module('wampumfrontendApp')
  .service('animationService', function (animationObjectsService) {

    var stage = animationObjectsService.stage;

    var layer = new Kinetic.Layer();
    // layer.add(animationObjectsService.jeans.kinetic);
    // layer.add(animationObjectsService.sunglasses.kinetic);
    // layer.add(animationObjectsService.yellowRainJacket.kinetic);
    // layer.add(animationObjectsService.shoes.kinetic);

    layer.add(animationObjectsService.umbrellaCanvas);
    layer.add(animationObjectsService.umbrellaCut1);
    layer.add(animationObjectsService.umbrellaStem);
    layer.add(animationObjectsService.umbrellaHandle);

    // document.getElementById('kinetic').style.background = 'red';

    stage.add(layer);

    var centerX = stage.width() / 2;
    var period = 8000;

    var animInput = function (item, offset, options) {
      return function(frame) {
        item.setX(options.amplitudeX * Math.sin((frame.time - offset) * 2 * Math.PI / period) + centerX);
        item.setY(options.amplitudeY * Math.cos((frame.time - offset) * 2 * Math.PI / period) + options.centerY);
      };
    };

    var jeansAnim = new Kinetic.Animation(animInput(animationObjectsService.jeans.kinetic, 2200, animationObjectsService.jeans.metadata), layer);
    // jeansAnim.start();
    var sunglassesAnim = new Kinetic.Animation(animInput(animationObjectsService.sunglasses.kinetic, 4200, animationObjectsService.sunglasses.metadata), layer);
    // sunglassesAnim.start();
    var yellowRainJacketAnim = new Kinetic.Animation(animInput(animationObjectsService.yellowRainJacket.kinetic, 6200, animationObjectsService.yellowRainJacket.metadata), layer);
    // yellowRainJacketAnim.start();
    var shoesAnim = new Kinetic.Animation(animInput(animationObjectsService.shoes.kinetic, 8200, animationObjectsService.shoes.metadata), layer);
    // shoesAnim.start();
  
  });