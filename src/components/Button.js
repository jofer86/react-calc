import React from 'react';
import PropTypes from 'prop-types';
import '../style/Button.css';

const Button = (props) => {
  const { name, wide, color } = props;
  const width = wide ? '50.7%' : '25%';
  const button = (
    <button
      type="button"
      className="Button"
      style={{ backgroundColor: color, width }}
      onClick={() => props.click(name)}
    >
      {name}
    </button>
  );
  return button;
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
