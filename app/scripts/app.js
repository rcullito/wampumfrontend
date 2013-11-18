'use strict';

angular.module('wampumfrontendApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/ui/wampumfrontend', {
        templateUrl: '/ui/wampumfrontend/app/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/ui'
      });
  });
