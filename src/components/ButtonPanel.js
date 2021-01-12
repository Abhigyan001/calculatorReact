import React from 'react';
import Button from './Button';
import buttons from '../buttons/buttons';

const ButtonPanel = () => {
  
  return (
    <div id="button-panel">
      {buttons.map((row, i) => (
        <div className="row" key={`row${buttons[i][0]}`}>
          {row.map(name => (
            <Button name={name} key={name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
