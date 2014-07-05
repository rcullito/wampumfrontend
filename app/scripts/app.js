'use strict';

angular.module('wampumfrontendApp', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/ui/wampumfrontend/dest/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/itemlist', {
        templateUrl: '/ui/wampumfrontend/dest/itemlist.html',
        controller: 'ItemlistCtrl',
      })      
      .when('/ship/:locationid', {
        templateUrl: '/ui/wampumfrontend/dest/ship.html',
        controller: 'ShipCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
