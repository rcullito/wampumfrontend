'use strict';

angular.module('wampumfrontendApp')
  .controller('ItemlistCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'cookieService', 'itemListService', function ($scope, $routeParams, $location, $cookies, cookieService, itemListService) {

    $scope.topRightMessage = cookieService.topRightMessage();

    itemListService.tags()
      .success(function (data) {
        var tags = _.chain(data)
          .groupBy(function (entry) {
            return _.first(entry.tag);
          })
          .value();

        console.log(tags);
        $scope.tags = _.pairs(tags);

        console.log($scope.tags);

      })
      .error(function (err) {
        console.log(err);
      })

  }]);