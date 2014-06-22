'use strict';

angular.module('wampumfrontendApp')
  .service('authService', ['$http', function ($http) {

    var hash_password = function (password) {
      var hash = CryptoJS.MD5(password);
      return hash.toString();
    }

    var signup = function(email, password) {
      var encrypted_password = hash_password(password);
      return $http({
        method: 'POST',
        url: '/signup',
        data: {
          email: email,
          password: encrypted_password,
        }
      });
    }; 

    var login = function (email, password) {
      var encrypted_password = hash_password(password);
      return $http({
        method: 'POST',
        url: '/login',
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
      login: login,
      checkLoginStatus: checkLoginStatus
    };

  }]);