import React, { Component } from 'react';
import './counter.css'

export default class Counter extends Component {

  render() {
    return (
        <p className="counter">
          {this.props.county}
        </p>
    )
  }
}