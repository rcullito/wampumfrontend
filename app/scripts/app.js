'use strict';

angular.module('wampumfrontendApp', ['ngRoute', 'ngDisqus'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider;
    $routeProvider
      .when('/ui/wampumfrontend/home', {
        templateUrl: '/ui/wampumfrontend/app/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/ui/wampumfrontend/home'
      });
  });
