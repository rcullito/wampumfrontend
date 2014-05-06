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
      .when('/blog/Fuzzy_Queries_5.5.14', {
        templateUrl: '/ui/wampumfrontend/dist/Fuzzy_Queries_5.5.14.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/Anthropomorphism_4.3.14', {
        templateUrl: '/ui/wampumfrontend/dist/Anthropomorphism_4.3.14.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/KineticJS_3.25.14', {
        templateUrl: '/ui/wampumfrontend/dist/KineticJS_3.25.14.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/The_Winter_Olympics_2.23.14', {
        templateUrl: '/ui/wampumfrontend/dist/The_Winter_Olympics_2.23.14.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/At_Sea_1.12.14', {
        templateUrl: '/ui/wampumfrontend/dist/At_Sea_1.12.14.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/Less_Boilerplate_More_Action_12.6.13', {
        templateUrl: '/ui/wampumfrontend/dist/Less_Boilerplate_More_Action_12.6.13.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/Four_Databases_Three_Seasons_11.24.13', {
        templateUrl: '/ui/wampumfrontend/dist/Four_Databases_Three_Seasons_11.24.13.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
