import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


import { scaleLinear, scaleTime } from 'd3-scale';
import { max, min, extent } from 'd3-array';
import { select } from 'd3-selection';
import * as d3Line from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';

import SalesTable from './SalesTable';
import { fetchAllSalesData } from '../actions/sales';

export class FoodTruckDashboard extends React.Component {
  state = {
    sales: {}
  };

    componentDidUpdate() {

      const data = this.state.sales;
      console.log(data);
      const graph = this.graph;

      let svgWidth = 700, svgHeight = 400;
      let margin = { top: 20, right: 20, bottom: 30, left: 50 };
      let width = svgWidth - margin.left - margin.right;
      let height = svgHeight - margin.top - margin.bottom;

      let padding = 30;

      let svg = select(graph)
              .attr("width", svgWidth)
              .attr("height", svgHeight)

      let g = svg.append("g")
                 .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")"
                 );

     let x = scaleTime().rangeRound([0, width]);
     let y = scaleLinear().rangeRound([height, 0]);

     let salesMaxAxis = max(data, function(d){
       return d.retailSales;
     });

     let salesMinAxis = min(data, function(d){
       return d.retailSales;
     });

     let line = d3Line.line()
         .x(function(d) { return x(d.date)})
         .y(function(d) { return y(d.retailSales)})
        .curve(d3Line.curveBasis);

       x.domain(extent(data, function(d) { return d.date }));
       y.domain([salesMinAxis - (100*(salesMinAxis)), 2*(salesMaxAxis)]);

       g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(axisBottom(x))
        .select(".domain")
        .remove();

      g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);


      svg.append("text")
        .attr("x", width/2)
        .attr("y", padding)
        .style("text-anchor", "middle")
        .style("font-size", "1.5em")
        .text("Retail Sales");

      // var yScale = scaleLinear()
      //                 .domain(extent(birthData2011, d => d.lifeExpectancy))
      //                 .range([height - padding, padding]);
      //
      // var xScale = scaleLinear()
      //                 .domain(extent(birthData2011, d => d.births/d.population))
      //                 .range([padding, width - padding]);
      //
      // var birthsScale = scaleLinear()
      //                     .domain(extent(birthData2011, d => d.births))
      //                     .range([2, 40]);
      //
      //
      // var populationScale = scaleLinear()
      //                     .domain(extent(birthData2011, d => d.population))
      //                     .range(['lightgreen', 'red']);


      // var xAxis = d3.axisBottom(xScale)
      //               // .ticks(12)
      //               .tickSize(-height + 2 * padding)
      //               .tickSizeOuter(0);
      // var yAxis = d3.axisLeft(yScale)
      //               // .ticks(12)
      //               .tickSize(-width + 2 * padding)
      //               .tickSizeOuter(0);

      // select(graph)
      //     .append("g")
      //       .attr("transform" , "translate(0," + (height - padding) + ")")
      //       .call(xAxis);
      //
      // select(graph)
      //     .append("g")
      //     .attr("transform" , "translate(" + padding + ", 0)")
      //       .call(yAxis);

      // select(graph)
      //   .attr("width", width)
      //   .attr("height", height)
      //   .selectAll("circle")
      //   .data(birthData2011)
      //   .enter()
      //   .append("circle")
      //     .attr("cx", d => xScale(d.births/d.population))
      //     .attr("cy", d => yScale(d.lifeExpectancy))
      //     .attr("r", d => birthsScale(d.births))
      //     .attr("fill", d => populationScale(d.population));

    }

  componentDidMount() {
        this.setState(() => ({sales: this.props.sales}));
     }

  render(){
    return (
      <div>
          <svg ref={graph => this.graph = graph}>
          </svg>
          <SalesTable />
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAllSalesData: () => dispatch(fetchAllSalesData())
});

const mapStateToProps = (state) => ({
  sales: state.sales.data
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodTruckDashboard);
