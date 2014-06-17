'use strict';

angular.module('wampumfrontendApp')
  .service('authService', ['$http', function ($http) {

    console.log(_);
    console.log(CryptoJS);

    var register = function(email, password) {
      var hash = CryptoJS.MD5(password);
      console.log(hash.toString());

      // post to /login
    };   

    return {
      register: register,
    };

  }]);