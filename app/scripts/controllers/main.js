'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, $window, $routeParams, $location, esService, disqusService) {


    var raw_event = {workflow: 'pageload'};

    esService.eventCollector(raw_event)
      .success(function(data) {
        console.log('event collected!')
        console.log(data);
      })
      .error(function(data) {
        console.log('something went wrong');
        console.log(data);
      });



    var path = $location.path().split('/');
    var suburl = _.last(path);

    var sub_urls = ['about', 'how', 'mail', 'blog', '1'];

    if (_.contains(sub_urls), suburl) {
      $scope.suburl = suburl;
    } else {
      $scope.suburl = '4';
    }

    if ($scope.suburl === '4') {
      disqusService.loadDisqus();
    }

  	
  	$scope.search = function(term) {
      // find a better way to update the url without reloading the page
      // $location.path('/search/' + term);

      // fire off an async request to the raw events here that the user has searched for something
      // time stamp,
      // location
      var raw_event = {
        search_term: term,
        referrer_url: document.referrer,
        workflow: 'searching',
      };


      esService.eventCollector(raw_event)
        .success(function(data) {
          console.log('event collected!')
          console.log(data);
        })
        .error(function(data) {
          console.log('something went wrong');
          console.log(data);
        });

      esService.prefixQuery('organizations', term)
        .success(function(data) {

          $scope.results = data;
          console.log($scope.results);
          $scope.suburl = undefined;
        });



  	};







    $scope.takeAction = function(action) {
      alert('whoops, this feature is coming soon!');
    }


});
