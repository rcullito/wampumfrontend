'use strict';

angular.module('wampumfrontendApp')
  .service('animationService', function (animationObjectsService) {

    // var stage = animationObjectsService.stage;
    // console.log(stage.attrs);

    // var layer = new Kinetic.Layer();
    // layer.add(animationObjectsService.jeans.kinetic);
    // layer.add(animationObjectsService.sunglasses.kinetic);
    // layer.add(animationObjectsService.yellowRainJacket.kinetic);
    // layer.add(animationObjectsService.shoes.kinetic);
    // layer.add(animationObjectsService.umbrella.kinetic);
    // layer.add(animationObjectsService.wateringCan.kinetic);

    // // document.getElementById('kinetic').style.background = 'red';

    // stage.add(layer);

    // var centerX = stage.width() / 2;
    // var period = 12000;

    // var animInput = function (item, offset, options) {
    //   return function(frame) {
    //     item.setX(options.amplitudeX * Math.sin((frame.time - offset) * 2 * Math.PI / period) + centerX);
    //     item.setY(options.amplitudeY * Math.cos((frame.time - offset) * 2 * Math.PI / period) + options.centerY);
    //   };
    // };

    // var jeansAnim = new Kinetic.Animation(animInput(animationObjectsService.jeans.kinetic, 0, animationObjectsService.jeans.metadata), layer);
    // jeansAnim.start();
    // var sunglassesAnim = new Kinetic.Animation(animInput(animationObjectsService.sunglasses.kinetic, 2000, animationObjectsService.sunglasses.metadata), layer);
    // sunglassesAnim.start();
    // var yellowRainJacketAnim = new Kinetic.Animation(animInput(animationObjectsService.yellowRainJacket.kinetic, 4000, animationObjectsService.yellowRainJacket.metadata), layer);
    // yellowRainJacketAnim.start();
    // var shoesAnim = new Kinetic.Animation(animInput(animationObjectsService.shoes.kinetic, 6000, animationObjectsService.shoes.metadata), layer);
    // shoesAnim.start();
    // var umbrellaAnim = new Kinetic.Animation(animInput(animationObjectsService.umbrella.kinetic, 8000, animationObjectsService.umbrella.metadata), layer);
    // umbrellaAnim.start();
    // var wateringCanAnim = new Kinetic.Animation(animInput(animationObjectsService.wateringCan.kinetic, 10000, animationObjectsService.wateringCan.metadata), layer);
    // wateringCanAnim.start();

  });