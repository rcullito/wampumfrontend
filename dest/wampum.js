'use strict';

angular.module('wampumfrontendApp', ['ngRoute', 'ngDisqus', 'ngCookies'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/ui/wampumfrontend/dist/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/account/:locationid?', {
        templateUrl: '/ui/wampumfrontend/dist/account.html',
        controller: 'AccountCtrl',
      })
      .when('/profile', {
        templateUrl: '/ui/wampumfrontend/dist/profile.html',
        controller: 'ProfileCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

angular.module('wampumfrontendApp')
  .controller('AccountCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', function ($scope, $routeParams, $location, $cookies, authService) {

    if ($routeParams.locationid) {
      $cookies.locationid = $routeParams.locationid;
    }

    if ($cookies.userid !== "null") {
      $location.url('/profile')
    }

    var setScopeBasedOnFormType = function (form_type) {
      $scope.form_type = form_type;
      if (form_type === 'login') {
        $scope.form_name = 'Login';
        $scope.alternate = 'New to Wampum? Signing up takes a second!'
        $scope.alternate_button = 'Sign Up';
      } else {
        $scope.form_name = 'Sign Up';
        $scope.alternate = 'Already a member? Login here.'
        $scope.alternate_button = 'Login';
        $routeParams.type = 'login';
      }
    };

    $scope.setFormType = function (form_type) {
      $scope.form_type = form_type;
      setScopeBasedOnFormType(form_type);
    }

    $scope.alternateLogin = function (form_type) {
      if (form_type === 'login') {
        var other_form_type = 'signup';
      } else {
        var other_form_type = 'login';
      }
      setScopeBasedOnFormType(other_form_type);
    };

    $scope.validate = function (form_type, email, password) {

      if (form_type === 'signup') {
        authService.signup(email, password)
          .success(function (data) {
            $cookies.userid = data._id;
            $location.url('/profile')
          })
          .error(function (err) {
            alert(err);
          });
      } else {
        authService.login(email, password)
          .success(function (data) {
            $cookies.userid = data._id;
            $location.url('/profile')
          })
          .error(function (err) {
            alert(err);
          });
      }

    }
  }]);
'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'esService', 'uuidService', function ($scope, $routeParams, $location, $cookies, esService, uuidService) {

    if ($cookies.userid !== "null") {
      $scope.profile_message = "My Profile";
    } else {
      $scope.profile_message = "Sign Up / Log In";
    }

    $scope.yetToSignUp = true; 

    $scope.showAbout = function () {
      $scope.motion = true;
      $scope.resultObjects = null;
      $location.url($location.path());
    };

    $scope.yetToWeighIn = true;

    $scope.satisfied = function (event_type, event_value) {
      $scope.clickEvent(event_type, event_value, $scope.requestid);
      $scope.yetToWeighIn = false;
      $scope.weighedIn = true;
    };

    $scope.submitFeedback = function (event_type, event_value) {
      $scope.clickEvent(event_type, event_value, $scope.requestid);
      $scope.yetToWeighIn = false;
      $scope.weighedIn = false;
    };

    $scope.clickEvent = function (event_type, event_value) {
      esService.clickEvent(event_type, event_value, $scope.requestid)
        .error(function (err) {
          console.log(data);
        });
    };

    $scope.motion = true;
    $('#searchinput').val();
    
    $scope.search = function(term) {
      $scope.motion = false;
      $scope.requestid = uuidService.createUUID();
      
      $location.search('search', term);
      $scope.term = term;
      esService.clickEvent('search', term, $scope.requestid);

      esService.search(term)
        .success(function (results) {
          if (!_.isEmpty(results)) {
            $scope.resultObjects = results;
            $scope.noResults = false;
          } else {
            esService.clickEvent('no_results', term, $scope.requestid);
            $scope.resultObjects = false;
            $scope.noResults = true;
          }
          // $scope.motion = false;
          $location.search('search', term);
        })
        .error(function (err) {
          console.log(err);
        });
    };

    var urlSearchParams = $location.search();

    if (urlSearchParams.search) {
      $scope.search(urlSearchParams.search);
    };    

    // BEGINNING OF TYPEAHEAD STUFF

    $('#scrollable-dropdown-menu .typeahead').on("typeahead:opened", function () {
      $('#rc-dropdown').css('width', searchinputWidth);
    });


    var searchinputWidth = $('#searchinput').css('width');

    var engine = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('tag'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 10,
      prefetch: {
        url: '/autocomplete',
        filter: function(res) {
          return res;
        }
      }
    });

    engine.initialize();

    $('#scrollable-dropdown-menu .typeahead').typeahead({
      minLength: 1,
      highlight: false,
    }, {
      name: 'engine',
      displayKey: 'tag',
      source: engine.ttAdapter()
    });

    $('#searchinput').keyup(function (key) {
      if (key.which === 13) {
        return;
      }
      var current_term = $('#searchinput').val();
      engine.get(current_term, function (suggestions) {
        var top_hit = _.first(suggestions);
        if (top_hit) {
         var search_term = top_hit.tag;
          $scope.search(search_term);         
        }
      });
    });

    $('#gobutton').click(function () {
      $scope.search($('#searchinput').val());
    });

    $scope.hidetypeahead = function () {
      $('.typeahead').typeahead('close');
      $scope.search($('#searchinput').val());
    };

}]);

'use strict';

angular.module('wampumfrontendApp')
  .controller('ProfileCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'authService', 'profileService', function ($scope, $routeParams, $location, $cookies, authService, profileService) {

    $scope.userid = $cookies.userid;
    $scope.locationid = $cookies.locationid;

    profileService.getUserById($scope.userid)
      .success(function (user) {
        $scope.useremail = user._source.email;
      })
      .error(function (err) {
        console.log(err);
      });

    profileService.getLocationById($scope.locationid)
      .success(function (location) {
        console.log(location);
        $scope.location_details;
      })
      .error(function (err) {
        console.log(err);
      });      

    $scope.logout = function () {
      $cookies.userid = null;
      $location.url('/');
    };

  }]);
'use strict';

angular.module('wampumfrontendApp')
  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
          scope.$apply(function (){
              scope.$eval(attrs.ngEnter);
          });
          event.preventDefault();
        }
      });
    };
});


angular.module('wampumfrontendApp')
  .directive('gist', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',
      link: function(scope, elm, attrs) {
        var gistId = attrs.id;

        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('frameborder', '0');
        iframe.id = "gist-" + gistId;
        elm[0].appendChild(iframe);

        var iframeHtml = '<html><head><base target="_parent"><style>table{font-size:12px;}</style></head><body onload="parent.document.getElementById(\'' + iframe.id + '\').style.height=document.body.scrollHeight + \'px\'"><scr' + 'ipt type="text/javascript" src="https://gist.github.com/' + gistId + '.js"></sc'+'ript></body></html>';

        var doc = iframe.document;
        if (iframe.contentDocument) doc = iframe.contentDocument;
        else if (iframe.contentWindow) doc = iframe.contentWindow.document;

        doc.open();
        doc.writeln(iframeHtml);
        doc.close();
      }
    };
  });

angular.module('wampumfrontendApp')
  .directive('blogheader', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/ui/wampumfrontend/dist/blogheader.html',
    };
  });
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

    return {
      signup: signup,
      login: login,
    };

  }]);
'use strict';

angular.module('wampumfrontendApp')
  .service('disqusService', function () {

    var loadDisqus = function() {
      // http://docs.disqus.com/help/2/
      window.disqus_shortname = 'wampum';
      // window.disqus_url = 'http://wampum.io';

      // do document element names here
      // window.disqus_identifier = 'newid';
      // console.log(document.getElementById('blog_title'));
      // console.log('here');
      // window.disqus_title = 'title';

       
      // http://docs.disqus.com/developers/universal/
      (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://wampum.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();

      angular.element(document.getElementById('disqus_thread')).html('');
    };

    return {
      loadDisqus: loadDisqus,
    };
  });
'use strict';

angular.module('wampumfrontendApp')
  .service('esService', ['$http', function ($http) {

    var hyphy = function (inputstring) {
      var wss = inputstring.split(' ');
      return wss.join('-');
    }

    var search = function (search_term) {
      return $http({
        method: 'GET',
        url: '/search/' + search_term,
      })
    };

    var clickEvent = function (event_type, event_value, requestid) {
      return $http({
        method: 'POST',
        url: 'clickevent',
        data: {
          event_type: event_type,
          event_value: hyphy(event_value),
          requestid: requestid,
        }
      });
    };

    return {
      search: search,
      clickEvent: clickEvent
    };

  }]);
'use strict';

angular.module('wampumfrontendApp')
  .service('profileService', ['$http', function ($http) {

    var getUserById = function (userid) {
      return $http({
        method: 'GET',
        url: '/user',
        params: {
          userid: userid,
        }
      });
    };

    var getLocationById = function (locationid) {
      return $http({
        method: 'GET',
        url: '/location',
        params: {
          locationid: locationid,
        }
      });
    };

    return {
      getUserById: getUserById,
      getLocationById: getLocationById
    };

  }]);
'use strict';

angular.module('wampumfrontendApp')
  .service('uuidService', ['$http', function ($http) {

    var createUUID = function() {
      // http://www.ietf.org/rfc/rfc4122.txt
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      return uuid;
    };   

    return {
      createUUID: createUUID,
    };

  }]);