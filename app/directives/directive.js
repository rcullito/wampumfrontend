'use strict';
angular.module("wampumfrontendApp")
.directive("superman", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "/static/header.html"
    }
})
.directive("statedropdown", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "/static/statedropdown.html"
    }
})