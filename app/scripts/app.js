'use strict';

angular.module('wampumfrontendApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/ui/wampumfrontend/home', {
        templateUrl: '/ui/wampumfrontend/app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ui/wampumfrontend/blog', {
        templateUrl: '/ui/wampumfrontend/app/views/blog.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/ui/wampumfrontend/home'
      });
  });
