import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { results } = props;
  const disp = <p>{results}</p>;
  return disp;
};

Display.defaultProps = {
  results: '0',
};

Display.propTypes = {
  results: PropTypes.string,
};

export default Display;
