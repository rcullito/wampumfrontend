'use strict';

angular.module('wampumfrontendApp')
  .controller('BlogCtrl', ['$scope', '$sce', '$routeParams', '$location', 'disqusService',
  function ($scope, $sce, $routeParams, $location, disqusService) {

    disqusService.loadDisqus();

    $scope.showAbout = function () {
      // reload animation here
      $scope.motion = true;
      $location.path('/');
    };

    $scope.blogs = [
      { "title":"Fuzzy Queries","date":"May 2014","written":"Fuzzy_Queries_5.5.14" },
      { "title":"Anthropomorphism","date":"April 2014","written":"Anthropomorphism_4.3.14" },
      { "title":"KineticJS","date":"March 2014","written":"KineticJS_3.25.14" },
      { "title":"The Winter Olympics","date":"February 2014","written":"The_Winter_Olympics_2.23.14" },
      { "title":"At Sea","date":"January 2014","written":"At_Sea_1.12.14" },
      { "title":"Less Boilerplate More Action","date":"December 2013","written":"Less_Boilerplate_More_Action_12.6.13" },
      { "title":"Four Databases Three Seasons","date":"November 2013","written":"Four_Databases_Three_Seasons_11.24.13" }
    ]; 

}]);
