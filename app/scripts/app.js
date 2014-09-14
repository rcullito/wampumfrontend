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
      .when('/destination/:clothingtypes/:brands', {
        templateUrl: '/static/destination.html',
        controller: 'DestinationCtrl',
      })   
      .when('/shipping/:clothingtype/:brand/:locationid', {
        templateUrl: '/static/shipping.html',
        controller: 'ShippingCtrl',
      })               
      .when('/locations', {
        templateUrl: '/static/locations.html',
        controller: 'LocationsCtrl',
      })   
      .when('/questions', {
        templateUrl: '/static/questions.html',
        controller: 'QuestionsCtrl',
      })            
      .otherwise({
        redirectTo: '/'
      });
  }]);
