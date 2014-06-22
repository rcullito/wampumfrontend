'use strict';

angular.module('wampumfrontendApp')
  .service('authService', ['$http', function ($http) {

    var signup = function(email, password) {
      var hash = CryptoJS.MD5(password);
      var encrypted_password = hash.toString();
      return $http({
        method: 'POST',
        url: '/signup',
        data: {
          email: email,
          password: encrypted_password,
        }
      });
    };  

    var checkLoginStatus = function() {
      return $http({
        method: 'GET',
        url: '/checkLoginStatus'  ,     
      });
    };

    return {
      signup: signup,
      checkLoginStatus: checkLoginStatus
    };

  }]);