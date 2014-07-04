'use strict';
angular.module("wampumfrontendApp")
.directive("superman", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "/ui/wampumfrontend/dest/header.html"
    }
})