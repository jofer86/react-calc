import React, { Component } from 'react';
import '../App.css';
import Button from './Button';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
      buttons: [{ name: 'AC', id: 1 }, { name: '+/-', id: 2 }, { name: '%', id: 3 }, { name: '+', id: 4 },
        { name: '7', id: 5 }, { name: '8', id: 6 }, { name: '9', id: 7 }, { name: 'X', id: 8 },
        { name: '4', id: 9 }, { name: '5', id: 10 }, { name: '6', id: 11 }, { name: '-', id: 12 },
        { name: '1', id: 13 }, { name: '2', id: 14 }, { name: '3', id: 15 }, { name: '+', id: 16 },
        { name: '0', id: 17 }, { name: '.', id: 18 }, { name: '=', id: 19 },
      ],
    };
  }

  render() {
    const { result } = this.state;
    const { buttons } = this.state;
    const buttonLayout = () => {
      const layout = buttons.map((button) => (
        <Button
          key={button.id}
          name={button.name}
        />
      ));
      return layout;
    };
    return (
      <div className="App">
        <Display
          results={result}
        />
        <ButtonPanel
          button={buttonLayout()}
        />
      </div>
    );
  }
}

export default App;
