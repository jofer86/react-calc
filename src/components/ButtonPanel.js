import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttons = [[{ name: 'AC', id: 1 }, { name: '+/-', id: 2 }, { name: '%', id: 3 }, { name: '+', id: 4 }],
    [{ name: '7', id: 5 }, { name: '8', id: 6 }, { name: '9', id: 7 }, { name: 'X', id: 8 }],
    [{ name: '4', id: 9 }, { name: '5', id: 10 }, { name: '6', id: 11 }, { name: '-', id: 12 }],
    [{ name: '1', id: 13 }, { name: '2', id: 14 }, { name: '3', id: 15 }, { name: '+', id: 16 }],
    [{ name: '0', id: 17 }, { name: '.', id: 18 }, { name: '=', id: 19 }],
  ];
  const divKey = [0, 1, 2, 3, 4, 5];
  const buttonLayout = () => {
    const layout = buttons.map(((row, index) => (
      <div key={divKey[index]}>
        {row.map((button) => (
          <Button
            key={button.id}
            name={button.name}
          />
        ))}
      </div>
    )));
    return layout;
  };

  return buttonLayout();
};

export default ButtonPanel;
