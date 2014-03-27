'use strict';

angular.module('wampumfrontendApp')
  .service('animationService', function (animationObjectsService) {

    var layer = new Kinetic.Layer();
    layer.add(animationObjectsService.jeans);
    layer.add(animationObjectsService.sunglasses);
    layer.add(animationObjectsService.yellowRainJacket);
    layer.add(animationObjectsService.shoes);

    var stage = new Kinetic.Stage({
      container: 'kinetic',
      // width: 800,
      width: document.getElementById('kinetic').offsetWidth,    
      height: 200
    });
    stage.add(layer);

    var amplitude = stage.width() / 2;
    var centerX = (stage.width() / 2) - 110;
    var speed = .4;
    var jeans_offset = 2200;

    var animInput = function (item, offset) {
      return function(frame) {
        item.setX(amplitude * Math.sin((frame.time - offset) * speed * Math.PI / 2000) + centerX);
        item.setY(200 * Math.cos((frame.time - offset) * speed * Math.PI / 2000) - 100);
      };
    };

    var anim1 = new Kinetic.Animation(animInput(animationObjectsService.jeans, 2200), layer);
    anim1.start();
    var anim2 = new Kinetic.Animation(animInput(animationObjectsService.sunglasses, 4200), layer);
    anim2.start();
    var anim3 = new Kinetic.Animation(animInput(animationObjectsService.yellowRainJacket, 6200), layer);
    anim3.start();
    var anim4 = new Kinetic.Animation(animInput(animationObjectsService.shoes, 8200), layer);
    anim4.start();
  
  });