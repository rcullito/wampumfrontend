'use strict';

angular.module('wampumfrontendApp')
  .service('blogService', function ($http) {

    var blogList = function(callback) {
      superagent
        .get('/blogList')
        .end(function (err, superagent_res) {
          if (err) {
            return callback(err);
          }
          return callback(null, superagent_res.body);
        });
    };


    return {
      blogList: blogList,
    };
  });