'use strict';

angular.module('wampumfrontendApp')
  .service('animationService', function (animationObjectsService) {

    var layer = new Kinetic.Layer();
    // layer.add(animationObjectsService.jeans);
    // layer.add(animationObjectsService.sunglasses);
    layer.add(animationObjectsService.yellowRainJacket);
    // layer.add(animationObjectsService.shoes);

    // document.getElementById('kinetic').style.background = 'red';

    var stage = new Kinetic.Stage({
      container: 'kinetic',
      // width: 800,
      width: document.getElementById('kinetic').offsetWidth,    
      height: 200,
      fill: 'red',
    });
    stage.add(layer);

    var jeansAnimationOptions = {
      width: 60,
      height: 30,
      amplitudeX: (stage.width() / 2) - 30,
      amplitudeY: stage.height() - 15,
      centerY: -15
    };

    var sunglassesAnimationOptions = {
      width: 38,
      height: 23,
      amplitudeX: (stage.width() / 2) - 19,
      amplitudeY: stage.height() - 12,
      centerY: -12
    };

    var yellowRainJacketAnimationOptions = {
      width: 88,
      height: 60,
      amplitudeX: (stage.width() / 2) - 44,
      amplitudeY: stage.height() - 30,
      centerY: -30
    };

    // each item is positioned halfway down and halfway across 0, 0


    // half of the width, minus half of the item width so that it doesn't go off screen
    var amplitudeX = (stage.width() / 2) - 30;

    // since we want the swooping motion to only be visible in the lower half of the circle
    // we set the amplitude equal to the height, minus half of the item height so that we don't go off the screen
    var amplitudeY = stage.height() - 15;

    // 1. each amplitude is reduced by half of the count, so 30 and 15
    // 2. amplitude is the same as the height height but we want center y to be at 0
     
    // don't mess with this, just centered
    var centerX = stage.width() / 2;

    // just feels right visually to pull this up by the same amount as the amplitude adjustment
    var centerY = -15;
    // the period is there and back again, should be 8000 by default
    var period = 8000;

    // we can potentially just put the amplitude offset as an additional argument to this function
    var animInput = function (item, offset, options) {
      return function(frame) {
        item.setX(options.amplitudeX * Math.sin((frame.time - offset) * 2 * Math.PI / period) + centerX);
        item.setY(options.amplitudeY * Math.cos((frame.time - offset) * 2 * Math.PI / period) + options.centerY);
      };
    };


    // THE AMPLITUDE ADJUSTMENTS AND THE CENTERY NEED TO BE TIED TO EACH OBJECT INDIVIDUALLY

    var anim1 = new Kinetic.Animation(animInput(animationObjectsService.jeans, 2200, jeansAnimationOptions), layer);
    // anim1.start();

    var anim2 = new Kinetic.Animation(animInput(animationObjectsService.sunglasses, 4200, sunglassesAnimationOptions), layer);
    // anim2.start();
    var anim3 = new Kinetic.Animation(animInput(animationObjectsService.yellowRainJacket, 6200, yellowRainJacketAnimationOptions), layer);
    anim3.start();
    var anim4 = new Kinetic.Animation(animInput(animationObjectsService.shoes, 8200), layer);
    // anim4.start();
  
  });