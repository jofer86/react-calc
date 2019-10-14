import React, { Component } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

class App extends Component {
  render() {
    const calc = (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
    return calc;
  }
}

export default App;
