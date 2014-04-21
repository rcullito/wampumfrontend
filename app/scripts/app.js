'use strict';

angular.module('wampumfrontendApp', ['ngRoute', 'ngDisqus'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/ui/wampumfrontend/dist/views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/blog/:blogTitle', {
        templateUrl: '/ui/wampumfrontend/dist/views/blogmain.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
