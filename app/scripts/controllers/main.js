'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', function ($scope, emailService) {

  	window.disqus_shortname = 'wampum';

    $scope.show_blog = function() {
        $scope.blog = !$scope.blog;
    };

loadDisqus()

function loadDisqus() {
// http://docs.disqus.com/help/2/
window.disqus_shortname = 'wampum';
window.disqus_url = 'http://wampum.io';
 
// http://docs.disqus.com/developers/universal/
(function() {
var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
dsq.src = 'http://wampum.disqus.com/embed.js';
(document.getElementsByTagName('head')[0] ||
document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

angular.element(document.getElementById('disqus_thread')).html('');

  };

});
