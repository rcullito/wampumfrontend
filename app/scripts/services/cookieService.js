'use strict';

angular.module('wampumfrontendApp')
  .service('cookieService', ['$cookies', function ($cookies) {

    var topRightMessage = function () {
      if ($cookies.userloggedin === "yes") {
        return "My Orders";
      } else {
        return "Sign Up / Log In";
      }
    };

    return {
      topRightMessage: topRightMessage,
    };

  }]);