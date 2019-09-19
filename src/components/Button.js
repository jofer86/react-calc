import React from 'react';
import PropTypes from 'prop-types';
import './style/Button.css';

const Button = (props) => {
  const classHandler = (id) => {
    let output = null;
    if (id === 17) {
      output = 'Button wide';
    } else if (id === 4 || id === 8 || id === 12 || id === 16 || id === 19) {
      output = 'Button orange';
    } else {
      output = 'Button';
    }
    return output;
  };

  const { name, btnStyler } = props;
  const button = <div className={classHandler(btnStyler)}>{name}</div>;
  return button;
};

Button.propTypes = {
  name: PropTypes.string,
  btnStyler: PropTypes.number,
};

export default Button;
