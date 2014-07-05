'use strict';

angular.module('wampumfrontendApp')
  .controller('ItemlistCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'itemListService', function ($scope, $routeParams, $location, $cookies, itemListService) {

    itemListService.tags()
      .success(function (data) {
        var tags = _.chain(data)
          .groupBy(function (entry) {
            return _.first(entry.tag);
          })
          .sortBy(function (tags, letter) {
            return letter;
          })
          .map(function (datums) {
            return {
              letter: _.first(_.first(datums)['tag']),
              entries: _.pluck(datums, 'tag')
            }
          })
          .value();


      var about_a_third = Math.floor(tags.length / 3);
      var two_thirds = about_a_third * 2;

      $scope.firsttags = _.at(tags, _.range(0, about_a_third));
      $scope.secondtags = _.at(tags, _.range(about_a_third, two_thirds));
      $scope.thirdtags = _.at(tags, _.range(two_thirds, tags.length));

      })
      .error(function (err) {
        console.log(err);
      })

  }]);