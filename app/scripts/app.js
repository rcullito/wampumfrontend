'use strict';

angular.module('wampumfrontendApp', ['ngRoute', 'ngDisqus'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/ui/wampumfrontend/dist/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/blog/:blogTitle', {
        templateUrl: '/ui/wampumfrontend/dist/blogmain.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
