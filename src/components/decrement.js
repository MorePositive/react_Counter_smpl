import React, { Component } from 'react';
import './decrement.css'

export default class Decrement extends Component {
  
  render() {
    return (
      <button className="btn"
      onClick={this.props.onDecreaseClick}>
        <i class="fa fa-minus"></i>
      </button>
    )
  }
}