import React, { Component } from 'react';
import Counter from './counter'
import Decrement from './decrement'
import Increment from './increment'

import './App.css';

export default class App extends Component {

  state = {
    count: 0
  }

  onIncreaseClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  onDecreaseClick = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="app">
        <div className="card">
        <Decrement
        onDecreaseClick={this.onDecreaseClick}/>
        </div>
        <div className="card">
        <Counter
        county={this.state.count}/>
        </div>
        <div className="card">
        <Increment
        onIncreaseClick={this.onIncreaseClick}/>
        </div>
      </div>
    );
  }
}
