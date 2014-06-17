'use strict';

angular.module('wampumfrontendApp')
  .service('authService', ['$http', function ($http) {

    var register = function(email, password) {
      var hash = CryptoJS.MD5(password);
      var encrypted_password = hash.toString();

      return $http({
        method: 'POST',
        url: '/register',
        data: {
          email: email,
          password: encrypted_password,
        }
      });
    };   

    return {
      register: register,
    };

  }]);