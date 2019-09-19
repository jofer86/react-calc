import React from 'react';

const Button = (props) => {
  const { name } = props;
  const button = <span>{name}</span>;
  return button;
};

export default Button;
