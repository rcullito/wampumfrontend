'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, esService) {

    $scope.showAbout = function () {
      $scope.motion = true;
      $scope.resultObjects = null;
      $location.url($location.path());
    };

    $scope.motion = true;
    var urlSearchParams = $location.search();

    if (urlSearchParams.search) {
      var term = urlSearchParams.search;
      $location.search('search', term);
      $scope.term = term;
      esService.prefixQuery('stuff', term)
        .success(function (results) {
          $scope.resultObjects = results;
          $scope.motion = false;
          $location.search('search', term);
        })
        .error(function (err) {
          console.log(err);
        });
    };

    $scope.search = function() {

      var term = $('#searchinput').val();
      $location.search('search', term);

      esService.prefixQuery('stuff', term)
        .success(function (results) {
          $scope.resultObjects = results;
          $scope.motion = false;
          $location.search('search', term);
        })
        .error(function (err) {
          console.log(err);
        });
    };

    // BEGINNING OF TYPEAHEAD STUFF

    $('#scrollable-dropdown-menu .typeahead').on("typeahead:opened", function () {
      $('#rc-dropdown').css('width', searchinputWidth);
    });

    var searchinputWidth = $('#searchinput').css('width');

    var engine = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('tag'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 10,
      prefetch: {
        url: '/autocomplete',
        filter: function(res) {
          return res;
        }
      }
    });

    engine.initialize();

    $('#scrollable-dropdown-menu .typeahead').typeahead({
      minLength: 1,
      highlight: false,
    }, {
      name: 'engine',
      displayKey: 'tag',
      source: engine.ttAdapter()
    });

    var stage = new Kinetic.Stage({
      container: 'kinetic',
      width: document.getElementById('kinetic').offsetWidth,    
      height: 200,
    });
