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

    var amplitudeX = stage.width() / 2;
    var amplitudeY = stage.height() / 2;

    var centerX = stage.width() / 2;
    var centerY = stage.height() / 2;
    // the period is there and back again
    var period = 8000;

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