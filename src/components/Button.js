import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  const button = <span>{name}</span>;
  return button;
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
