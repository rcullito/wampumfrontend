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
      .when('/account/:locationid?', {
        templateUrl: '/ui/wampumfrontend/dest/account.html',
        controller: 'AccountCtrl',
      })
      .when('/profile', {
        templateUrl: '/ui/wampumfrontend/dest/profile.html',
        controller: 'ProfileCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
