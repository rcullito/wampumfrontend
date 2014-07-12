'use strict';

angular.module('wampumfrontendApp', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/dest/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/itemlist', {
        templateUrl: '/dest/itemlist.html',
        controller: 'ItemlistCtrl',
      })      
      .when('/ship/:locationid/:item', {
        templateUrl: '/dest/ship.html',
        controller: 'ShipCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
