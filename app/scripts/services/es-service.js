'use strict';

angular.module('wampumfrontendApp')
  .service('esService', function ($http) {

    var prefixQuery = function (index, prefix_term, callback) {
      superagent
        .get('/prefixQuery/' + index + '/' + prefix_term)
        .end(function(err, superagent_res) {
          if (err) {
            return callback(err);
          }
          return callback(null, superagent_res);
        });      
    };

    return {
      prefixQuery: prefixQuery
    };

  });