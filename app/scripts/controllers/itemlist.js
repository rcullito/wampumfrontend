'use strict';

angular.module('wampumfrontendApp')
  .controller('ItemlistCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'cookieService', 'itemListService', function ($scope, $routeParams, $location, $cookies, cookieService, itemListService) {

    $scope.topRightMessage = cookieService.topRightMessage();

    itemListService.tags()
      .success(function (data) {
        $scope.tags = _.chain(data)
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

      })
      .error(function (err) {
        console.log(err);
      })

  }]);