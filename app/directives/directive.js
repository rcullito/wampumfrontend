'use strict';
angular.module("wampumfrontendApp")
.directive("superman", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "/ui/wampumfrontend/dest/header.html"
    }
})
.directive("statedropdown", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "/ui/wampumfrontend/dest/statedropdown.html"
    }
})