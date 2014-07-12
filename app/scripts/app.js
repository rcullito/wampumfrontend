'use strict';

angular.module('wampumfrontendApp', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/static/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/itemlist', {
        templateUrl: '/static/itemlist.html',
        controller: 'ItemlistCtrl',
      })      
      .when('/ship/:locationid/:item', {
        templateUrl: '/static/ship.html',
        controller: 'ShipCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
