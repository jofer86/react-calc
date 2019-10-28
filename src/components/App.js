/* eslint-disable react/no-access-state-in-setstate */
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

    const { next, total } = this.state;

    if (next && !total) {
      show = next;
    }
    if (!next && total) {
      show = total;
    }
    if (next && total) {
      show = next;
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
