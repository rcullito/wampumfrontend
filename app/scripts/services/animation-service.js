'use strict';

angular.module('wampumfrontendApp')
  .service('animationService', function (animationObjectsService) {

    var stage = animationObjectsService.stage;

    var layer = new Kinetic.Layer();
    layer.add(animationObjectsService.jeans.kinetic);
    layer.add(animationObjectsService.sunglasses.kinetic);
    layer.add(animationObjectsService.yellowRainJacket.kinetic);
    layer.add(animationObjectsService.shoes.kinetic);

    // document.getElementById('kinetic').style.background = 'red';

    stage.add(layer);

    // don't mess with this, just centered
    var centerX = stage.width() / 2;
    // the period is there and back again, should be 8000 by default
    var period = 8000;

    var animInput = function (item, offset, options) {
      return function(frame) {

        item.setX(options.amplitudeX * Math.sin((frame.time - offset) * 2 * Math.PI / period) + centerX);
        item.setY(options.amplitudeY * Math.cos((frame.time - offset) * 2 * Math.PI / period) + options.centerY);
      };
    };

    var anim1 = new Kinetic.Animation(animInput(animationObjectsService.jeans.kinetic, 2200, animationObjectsService.jeans.metadata), layer);
    anim1.start();
    var anim2 = new Kinetic.Animation(animInput(animationObjectsService.sunglasses.kinetic, 4200, animationObjectsService.sunglasses.metadata), layer);
    anim2.start();
    var anim3 = new Kinetic.Animation(animInput(animationObjectsService.yellowRainJacket.kinetic, 6200, animationObjectsService.yellowRainJacket.metadata), layer);
    anim3.start();
    var anim4 = new Kinetic.Animation(animInput(animationObjectsService.shoes.kinetic, 8200, animationObjectsService.shoes.metadata), layer);
    anim4.start();
  
  });