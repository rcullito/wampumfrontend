'use strict';

angular.module('wampumfrontendApp')
  .service('blogService', ['$http', function ($http) {
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

    var blogTitle = function (title, callback) {
      superagent
        .get('/getTitle/' + title)
        .end(function (err, superagent_res) {
          if (err) {
            return callback(err);
          }
          return callback(null, superagent_res.text);
        });
    };

    return {
      blogList: blogList,
      blogTitle: blogTitle,
    };
  }]);