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
      .when('/account/:locationid?', {
        templateUrl: '/ui/wampumfrontend/dist/account.html',
        controller: 'AccountCtrl',
      })
      .when('/profile', {
        templateUrl: '/ui/wampumfrontend/dist/profile.html',
        controller: 'ProfileCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
