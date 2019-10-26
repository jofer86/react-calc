import React from 'react';
import Button from './Button';
import '../style/ButtonPanel.css';

const ButtonPanel = (props) => {
  const base = '#e0e0e0';
  const buttons = [
    [{ name: 'AC', id: 1, color: base }, { name: '+/-', id: 2, color: base }, { name: '%', id: 3, color: base }, { name: '÷', id: 4 }],
    [{ name: '7', id: 5, color: base }, { name: '8', id: 6, color: base }, { name: '9', id: 7, color: base }, { name: 'x', id: 8 }],
    [{ name: '4', id: 9, color: base }, { name: '5', id: 10, color: base }, { name: '6', id: 11, color: base }, { name: '-', id: 12 }],
    [{ name: '1', id: 13, color: base }, { name: '2', id: 14, color: base }, { name: '3', id: 15, color: base }, { name: '+', id: 16 }],
    [{
      name: '0', id: 17, color: base, wide: true,
    }, { name: '.', id: 18, color: base }, { name: '=', id: 19 }],
  ];
  const divKey = [1, 2, 3, 4, 5];
  const buttonLayout = () => {
    const layout = buttons.map(((row, index) => (
      <div className="row" key={divKey[index]}>
        {row.map((button) => (
          <Button
            key={button.id}
            name={button.name}
            wide={button.wide}
            color={button.color}
            click={() => props.click(button.name)}
          />
        ))}
      </div>
    )));
    return layout;
  };

  return buttonLayout();
};

export default ButtonPanel;
