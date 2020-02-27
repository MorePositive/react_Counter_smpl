import React, { Component } from 'react';
import './increment.css'

export default class Increment extends Component {
  
  render() {
    return (
        <button
        className="btn"
        onClick={ this.props.onIncreaseClick } 
        ><i class="fa fa-plus"/></button>
    )
  }
}