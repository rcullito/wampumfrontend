'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', 'esService', 'uuidService', function ($scope, $routeParams, $location, esService, uuidService) {

    $scope.yetToSignUp = true; 

    $scope.showAbout = function () {
      $scope.motion = true;
      $scope.resultObjects = null;
      $location.url($location.path());
    };

    $scope.yetToWeighIn = true;

    $scope.satisfied = function (event_type, event_value) {
      $scope.clickEvent(event_type, event_value, $scope.requestid);
      $scope.yetToWeighIn = false;
      $scope.weighedIn = true;
    };

    $scope.submitFeedback = function (event_type, event_value) {
      $scope.clickEvent(event_type, event_value, $scope.requestid);
      $scope.yetToWeighIn = false;
      $scope.weighedIn = false;
    };

    $scope.clickEvent = function (event_type, event_value) {
      esService.clickEvent(event_type, event_value, $scope.requestid)
        .error(function (err) {
          console.log(data);
        });
    };


    $scope.motion = true;
    var urlSearchParams = $location.search();

    $scope.search = function(type) {
      if (type === 'url') {
        var term = urlSearchParams.search;
      } else {
        var term = $('#searchinput').val();
      }

      $scope.requestid = uuidService.createUUID();
      
      $location.search('search', term);
      $scope.term = term;
      esService.clickEvent('search', term, $scope.requestid);

      esService.search(term)
        .success(function (results) {
          if (!_.isEmpty(results)) {
            $scope.resultObjects = results;
            $scope.noResults = false;
          } else {
            esService.clickEvent('no_results', term, $scope.requestid);
            $scope.resultObjects = false;
            $scope.noResults = true;
          }
          // $scope.motion = false;
          $location.search('search', term);
        })
        .error(function (err) {
          console.log(err);
        });
    };

    if (urlSearchParams.search) {
      $scope.search('url');
    };    

    // BEGINNING OF TYPEAHEAD STUFF

    $('#scrollable-dropdown-menu .typeahead').on("typeahead:opened", function () {
      $('#rc-dropdown').css('width', searchinputWidth);
    });

    $('#searchinput').keypress(function () {
      $scope.motion = false;
    })

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

}]);
