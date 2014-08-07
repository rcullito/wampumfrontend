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
.directive("brands", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "/static/brands.html"
    }
})
.directive("clothingtypes", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "/static/clothingtypes.html"
    }
})
