import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './styles.module.css';

const ButtonPanel = ({ buttons, clickHandler }) => {
  const buttonColors = ['+', 'X', '-', '=', '÷'];
  return (
    <div className={styles.button_panel}>
      {buttons.map((row, i) => (
        <div key={`row${buttons[i][0]}`} className={styles.button_panel_row}>
          {row.map(name => {
            const wide = name === '0' ? true : undefined;
            const color = buttonColors.includes(name) ? true : undefined;
            return (
              <Button name={name} wide={wide} color={color}
                clickHandler={buttonName => clickHandler(buttonName)}
                key={name}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default ButtonPanel;
