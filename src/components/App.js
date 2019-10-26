/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../style/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';


class App extends Component {
  constructor() {
    super();
    this.state = {
      next: null,
      total: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(Calculate(this.state, buttonName));
  }

  render() {
    let show = null;

    if (this.state.next && !this.state.total) {
      show = this.state.next;
    }
    if (!this.state.next && this.state.total) {
      show = this.state.total;
    }
    if (this.state.next && this.state.total) {
      show = this.state.next;
    }
    const calc = (
      <div className="App">
        <Display
          results={show}
        />
        <ButtonPanel
          click={this.handleClick}
        />
      </div>
    );
    return calc;
  }
}

export default App;
