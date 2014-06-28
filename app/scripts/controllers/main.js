'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'esService', 'uuidService', function ($scope, $routeParams, $location, $cookies, esService, uuidService) {

    if ($cookies.userloggedin === "yes") {
      $scope.profile_message = "My Profile";
    } else {
      $scope.profile_message = "Sign Up / Log In";
    }

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
    $('#searchinput').val();
    
    $scope.search = function(term) {
      $scope.motion = false;
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

    $('#searchinput').keyup(function (key) {
      if (key.which === 13) {
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

    $scope.hidetypeahead = function () {
      $('.typeahead').typeahead('close');
      $scope.search($('#searchinput').val());
    };

}]);
