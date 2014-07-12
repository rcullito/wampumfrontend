'use strict';
angular.module("wampumfrontendApp")
.directive("superman", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "/dest/header.html"
    }
})
.directive("statedropdown", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "/dest/statedropdown.html"
    }
})