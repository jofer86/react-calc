import React from 'react';


const Display = (props) => {
  const { results } = props;
  const disp = <p>{results}</p>;
  return disp;
};
export default Display;
