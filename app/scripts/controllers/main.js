'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', 'esService', function ($scope, $routeParams, $location, esService) {

    var createUUID = function() {
      // http://www.ietf.org/rfc/rfc4122.txt
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      return uuid;
    };   


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

      $scope.requestid = createUUID();
      
      $location.search('search', term);
      $scope.term = term;
      esService.clickEvent('search', term, $scope.requestid);

      esService.search('stuff', term)
        .success(function (results) {
          if (!_.isEmpty(results)) {
            $scope.resultObjects = results;
            $scope.noResults = false;
          } else {
            esService.clickEvent('no_results', term, $scope.requestid);
            $scope.resultObjects = false;
            $scope.noResults = true;
          }
          $scope.motion = false;
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

