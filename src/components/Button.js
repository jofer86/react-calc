import React from 'react';
import PropTypes from 'prop-types';
import './style/Button.css';

const Button = (props) => {
  const classHandler = (id) => {
    let output = null;
    if (id === 17) {
      output = 'wide';
    } else if (id === 4 || id === 8 || id === 12 || id === 16 || id === 19) {
      output = 'orange';
    } else {
      output = 'Button';
    }
    return output;
  };

  const { name, wide, color } = props;
  const button = <div className={wide ? 'wide' : 'Button'}>{name}</div>;
  return button;
};

Button.defaultProps = {
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string,
  btnStyler: PropTypes.number,
};

export default Button;
