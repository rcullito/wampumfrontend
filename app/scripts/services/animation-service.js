'use strict';

angular.module('wampumfrontendApp')
  .service('animationService', function (animationObjectsService) {

  // STAGING

  var stage = new Kinetic.Stage({
    container: 'kinetic',
    // width: 800,
    width: document.getElementById('kinetic').offsetWidth,    
    height: 200
  });

  var layer = new Kinetic.Layer();

  layer.add(animationObjectsService.jeans);
  // layer.add(animationObjectsService.sunglasses);
  // layer.add(animationObjectsService.yellowRainJacket);
  // layer.add(animationObjectsService.shoes);
  stage.add(layer);


  // ANIMATION
  // height is fixed at 200

  var amplitude = stage.width() / 2;
  // current widht is 680
  // so amplitude is 340
  // and center is 340
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

  var sunglasses_offset = 4200;

  var anim2 = new Kinetic.Animation(function(frame) {
    animationObjectsService.sunglasses.setX(amplitude * Math.sin((frame.time - sunglasses_offset) * speed * Math.PI / 2000) + centerX);
    animationObjectsService.sunglasses.setY(150 * Math.cos((frame.time - sunglasses_offset) * speed * Math.PI / 2000) - 100);         
  }, layer);

  // anim2.start();

  var yellowRainJacket_offset = 6200;

  var anim3 = new Kinetic.Animation(function(frame) {
    animationObjectsService.yellowRainJacket.setX(amplitude * Math.sin((frame.time - yellowRainJacket_offset) * speed * Math.PI / 2000) + centerX);
    animationObjectsService.yellowRainJacket.setY(150 * Math.cos((frame.time - yellowRainJacket_offset) * speed * Math.PI / 2000) - 100);         
  }, layer);

  // anim3.start();


  var shoes_offset = 8200;

  var anim4 = new Kinetic.Animation(function(frame) {
    animationObjectsService.shoes.setX(amplitude * Math.sin((frame.time - shoes_offset) * speed * Math.PI / 2000) + centerX);
    animationObjectsService.shoes.setY(150 * Math.cos((frame.time - shoes_offset) * speed * Math.PI / 2000) - 100);         
  }, layer);

  // anim4.start();
  
  });