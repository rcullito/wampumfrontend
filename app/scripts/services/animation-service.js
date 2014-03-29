'use strict';

angular.module('wampumfrontendApp')
  .service('animationService', function (animationObjectsService) {

    var layer = new Kinetic.Layer();
    layer.add(animationObjectsService.jeans);
    // layer.add(animationObjectsService.sunglasses);
    // layer.add(animationObjectsService.yellowRainJacket);
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
    // the period is there and back again
    var period = 8000;

    // we can potentially just put the amplitude offset as an additional argument to this function
    var animInput = function (item, offset) {
      return function(frame) {
        item.setX(amplitudeX * Math.sin((frame.time - offset) * 2 * Math.PI / period) + centerX);
        item.setY(amplitudeY * Math.cos((frame.time - offset) * 2 * Math.PI / period) + centerY);
      };
    };

    var anim1 = new Kinetic.Animation(animInput(animationObjectsService.jeans, 2200), layer);
    anim1.start();
    var anim2 = new Kinetic.Animation(animInput(animationObjectsService.sunglasses, 4200), layer);
    // anim2.start();
    var anim3 = new Kinetic.Animation(animInput(animationObjectsService.yellowRainJacket, 6200), layer);
    // anim3.start();
    var anim4 = new Kinetic.Animation(animInput(animationObjectsService.shoes, 8200), layer);
    // anim4.start();
  
  });