import React from 'react';

const ButtonPanel = (props) => {
  const { button } = props;
  const panel = (
    <div>
      <div>
        {button[0]}
        {button[1]}
        {button[2]}
        {button[3]}
      </div>
      <div>
        {button[4]}
        {button[5]}
        {button[6]}
        {button[7]}
      </div>
      <div>
        {button[8]}
        {button[9]}
        {button[10]}
        {button[11]}
      </div>
      <div>
        {button[12]}
        {button[13]}
        {button[14]}
        {button[15]}
      </div>
      <div>
        {button[16]}
        {button[17]}
        {button[18]}
        {button[19]}
      </div>
    </div>
  );
  return panel;
};

export default ButtonPanel;
