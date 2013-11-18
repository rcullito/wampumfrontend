'use strict';

angular.module('wampumfrontendApp')
  .service('emailService', function ($http) {


    var create_pub_specific_style_context = function() {
      return $http({
        method: 'POST',
        url: '/v2/config/stylecontext/527d4ba3a1b4e5144834bbfe',
        params: {},
        data: {
        'size': [300,250],
        'extended_type': 'text/logo',
        'has_border': true,
        'has_arrow': false,
        'template': 'text-arrow',
        'display_name': 'womens health head color default 300x250 logo',
          'css_options': [{
            "head_color": "#f7006e",
          }],
        }
      });
    };

    return {
      create_new_style_context300x250: create_new_style_context300x250,
    };
  });