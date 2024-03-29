'use strict';

angular.module('wampumfrontendApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$cookies', 'mainService', function ($scope, $routeParams, $location, $cookies, mainService) {

    smoothScroll.init();

    $scope.clothingselection = 'shirts';

    $scope.$watch('brand', function(newVal, oldVal) {
      if (newVal === 'other') {
        $scope.clothingtype = undefined;
        $scope.defaultclothing = true;
      }
      if (newVal !== 'other') {
        $scope.defaultclothing = false
        $scope.clothingtype = $scope.clothingselection;
      }
    });

    var div_width = document.getElementById("howitworkslower").offsetWidth;

    var margin = {top: 20, right: 120, bottom: 20, left: 120},
        // width = 960 - margin.right - margin.left,
        // width = div_width - margin.right - margin.left,
        width = 500,
        height = 400 - margin.top - margin.bottom;
        
    var i = 0,
        duration = 750,
        root;

    var tree = d3.layout.tree()
        .size([height, width]);

    var diagonal = d3.svg.diagonal()
        .projection(function(d) { return [d.y, d.x]; });

    var svg = d3.select("#howitworkslower").append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var flare = {
     "name": "your box",
     "children": [
      {
       "name": "shirts",
       "children": [
        {"name": "Human Solutions Family Winter Shelter"},
        {"name": "Career Gear"},
        {"name": "Arthritis Thrift Shop"},
        {"name": "Sew Much Comfort"}    
       ]
      },
      {
       "name": "jewelry",
       "children": [
        {"name": "Indigo Rescue"},
        {"name": "Housing Works"},
        {"name": "The Society of Memorial Sloan Kettering Cancer Center Thrift Shop"},
        {"name": "CancerCare"},
        {"name": "HourChildren"},
        {"name": "Cauz For Pawz"}
       ]
      },
      {
       "name": "shoes",
       "children": [
        {"name": "CancerCare"},
        {"name": "One World Running"},
        {"name": "Cauz For Pawz"},
        {"name": "Career Gear"}
       ]
      },    
      {
       "name": "scarves",
       "children": [
        {"name": "Hope Scarves"},
        {"name": "Human Solutions Family Winter Shelter"},
        {"name": "Arthritis Thrift Shop"}
       ]
      },
      {
       "name": "socks",
       "children": [
        {"name": "Camp Starlight"},
        {"name": "Human Solutions Family Winter Shelter"},
        {"name": "Portland Rescue Mission"}
       ]
      },
      {
       "name": "coats",
       "children": [
        {"name": "Homeless Gear"},
        {"name": "Human Solutions Family Winter Shelter"}
       ]
      }
     ]
    };

    root = flare;
    root.x0 = height / 2;
    root.y0 = 0;

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }
    // we could not collapse 1 of the nodes
    var unspecial_children = _.filter(root.children, function (child) {
      return child.name !== "jewelry";
    });
    unspecial_children.forEach(collapse);
    update(root);

    d3.select(self.frameElement).style("height", "800px");

    function update(source) {
      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse(),
          links = tree.links(nodes);

      // Normalize for fixed-depth.
      nodes.forEach(function(d) { d.y = d.depth * 180; });
      // nodes.forEach(function(d) { d.y = d.depth * 50; });

      // Update the nodes…
      var node = svg.selectAll("g.node")
          .data(nodes, function(d) { return d.id || (d.id = ++i); });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
          .on("click", click);

      nodeEnter.append("circle")
          .attr("r", 1e-6)
          .style("fill", function(d) { return d._children ? "#bba3d0" : "#fff"; });

      nodeEnter.append("text")
          .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
          .attr("dy", ".35em")
          .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
          .text(function(d) { return d.name; })
          .style("fill-opacity", 1e-6);

      // Transition nodes to their new position.
      var nodeUpdate = node.transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

      nodeUpdate.select("circle")
          .attr("r", 4.5)
          .style("fill", function(d) { return d._children ? "#bba3d0" : "#fff"; });

      nodeUpdate.select("text")
          .style("fill-opacity", 1);

      // Transition exiting nodes to the parent's new position.
      var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
          .remove();

      nodeExit.select("circle")
          .attr("r", 1e-6);

      nodeExit.select("text")
          .style("fill-opacity", 1e-6);

      // Update the links…
      var link = svg.selectAll("path.link")
          .data(links, function(d) { return d.target.id; });

      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("d", function(d) {
            var o = {x: source.x0, y: source.y0};
            return diagonal({source: o, target: o});
          });

      // Transition links to their new position.
      link.transition()
          .duration(duration)
          .attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
          .duration(duration)
          .attr("d", function(d) {
            var o = {x: source.x, y: source.y};
            return diagonal({source: o, target: o});
          })
          .remove();

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    // Toggle children on click.
    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }


}]);
