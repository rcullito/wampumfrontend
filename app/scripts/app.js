'use strict';

angular.module('wampumfrontendApp', ['ngRoute', 'ngDisqus', 'ngCookies'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/ui/wampumfrontend/dist/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/login/:type/:itemid?', {
        templateUrl: '/ui/wampumfrontend/dist/login.html',
        controller: 'LoginCtrl',
      })
      .when('/profile/:username/:itemid?', {
        templateUrl: '/ui/wampumfrontend/dist/profile.html',
        controller: 'ProfileCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
