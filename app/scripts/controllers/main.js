'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'esService', 'uuidService', function ($scope, $routeParams, $location, $cookies, esService, uuidService) {


    $scope.showAbout = function () {
      $scope.motion = true;
      $scope.resultObjects = null;
      $location.url($location.path());
    };


    $scope.motion = true;
    $('#searchinput').val();
    
    $scope.search = function(term) {
      $scope.motion = false;
      $scope.requestid = uuidService.createUUID();
      
      $location.search('search', term);
      $scope.term = term;

      esService.search(term)
        .success(function (results) {
          if (!_.isEmpty(results)) {
            $scope.resultObjects = results;
            $scope.noResults = false;
          } else {
            $scope.resultObjects = false;
            $scope.noResults = true;
          }
          $location.search('search', term);
        })
        .error(function (err) {
          console.log(err);
        });
    };

    var urlSearchParams = $location.search();

    if (urlSearchParams.search) {
      $scope.search(urlSearchParams.search);
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
        url: '/tags',
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

    $('#searchinput').keyup(function (key) {
      if (key.which === 13) {
        $('.typeahead').typeahead('close');
        $scope.search($('#searchinput').val());
        return;
      }
      var current_term = $('#searchinput').val();
      engine.get(current_term, function (suggestions) {
        var top_hit = _.first(suggestions);
        if (top_hit) {
         var search_term = top_hit.tag;
          $scope.search(search_term);         
        }
      });
    });

    $('#gobutton').click(function () {
      $scope.search($('#searchinput').val());
    });

}]);
