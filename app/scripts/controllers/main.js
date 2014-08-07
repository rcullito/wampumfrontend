'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'esService', function ($scope, $routeParams, $location, $cookies, esService) {

    $scope.originofWampum = function () {
      alert('Wampum is a Native American word for shell beads that were used as a form of currency.');
    };

    $scope.clothingtypes = 'chinos';
    $scope.brands = 'jcrew';

}]);
