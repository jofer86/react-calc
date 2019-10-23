import React from 'react';
import PropTypes from 'prop-types';
import '../style/Display.css';

const Display = (props) => {
  const { results } = props;
  const disp = <p className="Display">{results}</p>;
  return disp;
};

Display.defaultProps = {
  results: '0',
};

Display.propTypes = {
  results: PropTypes.string,
};

export default Display;
