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