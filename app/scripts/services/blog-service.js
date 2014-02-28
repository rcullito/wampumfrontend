'use strict';

angular.module('wampumfrontendApp')
  .service('blogService', function ($http) {


    var blogList = function(index, prefix_term) {
      return $http({
        method: 'GET',
        url: '/blogList'
      });
    };


    return {
      blogList: blogList,
    };
  });