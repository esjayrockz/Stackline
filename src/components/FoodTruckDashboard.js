import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import Header from './Header';
import Search from './Search';

export class FoodTruckDashboard extends React.Component {
  state = {
    // SearchText: ''
    searchText: '',
    searchLocation: 'all',
    visibleFoodTrucks: this.props.foodtrucks
  };

  // createBarChart() {
  //       const graph = this.graph
  //       const dataMax = max(this.props.data)
  //       const yScale = scaleLinear()
  //          .domain([0, dataMax])
  //          .range([0, this.props.size[1]])
  //
  //    select(node)
  //       .selectAll('rect')
  //       .data(this.props.data)
  //       .enter()
  //       .append('rect')
  //
  //    select(node)
  //       .selectAll('rect')
  //       .data(this.props.data)
  //       .exit()
  //       .remove()
  //
  //    select(node)
  //       .selectAll('rect')
  //       .data(this.props.data)
  //       .style('fill', '#fe9922')
  //       .attr('x', (d,i) => i * 25)
  //       .attr('y', d => this.props.size[1] — yScale(d))
  //       .attr('height', d => yScale(d))
  //       .attr('width', 25)
  //    }



  render(){
    return
    <div>
      Hello
      <svg ref={graph => this.graph = graph}
      width={600} height={600}>
      </svg>
    </div>

  }
}

const mapStateToProps = (state) => ({
  foodtrucks: state.foodTrucks.foodtrucks
});

export default connect(mapStateToProps)(FoodTruckDashboard);
