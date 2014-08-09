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
      .when('/locations', {
        templateUrl: '/static/locations.html',
        controller: 'LocationsCtrl',
      })      
      .otherwise({
        redirectTo: '/'
      });
  }]);
