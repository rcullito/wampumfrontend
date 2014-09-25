'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    smoothScroll.init();

    $scope.clothingselection = 'shirts';
    $scope.brand = 'gap';

    $scope.additional = 'about';

    $scope.transition = function (newstate) {
      $scope.additional = newstate;
    };

    $scope.$watch('clothingselection', function(newVal, oldVal) {
      if (newVal === 'other') {
        $scope.clothingtype = undefined;
        $scope.defaultclothing = true;
      }
      if (newVal !== 'other') {
        $scope.defaultclothing = false
        $scope.clothingtype = $scope.clothingselection;
      }
    });

    var box_data = [
      {
        "name" : "Chantel Yip",
        "clothes" : {
          "button down" : 1,
          "pajama top" : 1,
          "skirt" : 4,
          "t-shirt" : 9,
          "sweater" : 1,
          "long sleeve" : 1,
          "dress top" : 4,
          "tank top" : 1
        },
        "new_clothes" : 1
      },
      {
        "name" : "KKCDY",
        "clothes" : {
          "jeans" : 2,
          "polo_shirt" : 4,
          "t-shirt" : 1,
          "shorts" : 1
        },
        "new_clothes" : 1
      }
    ];

    var data = [{"letter":"A","frequency":0.08167},{"letter":"B","frequency":0.01492},{"letter":"C","frequency":0.0278},{"letter":"D","frequency":0.04253},{"letter":"E","frequency":0.12702},{"letter":"F","frequency":0.02288},{"letter":"G","frequency":0.02022},{"letter":"H","frequency":0.06094},{"letter":"I","frequency":0.06973},{"letter":"J","frequency":0.00153},{"letter":"K","frequency":0.00747},{"letter":"L","frequency":0.04025},{"letter":"M","frequency":0.02517},{"letter":"N","frequency":0.06749},{"letter":"O","frequency":0.07507},{"letter":"P","frequency":0.01929},{"letter":"Q","frequency":0.00098},{"letter":"R","frequency":0.05987},{"letter":"S","frequency":0.06333},{"letter":"T","frequency":0.09056},{"letter":"U","frequency":0.02758},{"letter":"V","frequency":0.01037},{"letter":"W","frequency":0.02465},{"letter":"X","frequency":0.0015},{"letter":"Y","frequency":0.01971},{"letter":"Z","frequency":0.00074}];

    var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var formatPercent = d3.format(".0%");

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1, 1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(formatPercent);

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      data.forEach(function(d) {
        d.frequency = +d.frequency;
      });

      x.domain(data.map(function(d) { return d.letter; }));
      y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Frequency");

      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.letter); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.frequency); })
          .attr("height", function(d) { return height - y(d.frequency); });

      d3.select("input").on("change", change);

      var sortTimeout = setTimeout(function() {
        d3.select("input").property("checked", true).each(change);
      }, 2000);

      function change() {
        console.log('changed');
        clearTimeout(sortTimeout);

        // Copy-on-write since tweens are evaluated after a delay.
        var x0 = x.domain(data.sort(this.checked
            ? function(a, b) { return b.frequency - a.frequency; }
            : function(a, b) { return d3.ascending(a.letter, b.letter); })
            .map(function(d) { return d.letter; }))
            .copy();

        var transition = svg.transition().duration(750),
            delay = function(d, i) { return i * 50; };

        transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d.letter); });

        transition.select(".x.axis")
            .call(xAxis)
          .selectAll("g")
            .delay(delay);
      }

      // works once
      $scope.woot = change;


}]);
