import React, { Component } from 'react';
import '../style/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
<<<<<<< HEAD
//windows test
=======
import Calculate from '../logic/calculate';

>>>>>>> 409976eca418728b2a481f8f3f913f48753acc94
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
