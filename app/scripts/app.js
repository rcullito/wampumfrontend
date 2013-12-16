'use strict';

angular.module('wampumfrontendApp', ['ngRoute', 'ngDisqus'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/ui/wampumfrontend/app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search/:query', {
        templateUrl: '/ui/wampumfrontend/app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog/:blogindex', {
        templateUrl: '/ui/wampumfrontend/app/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
