/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import buttons from '../buttons/buttons';
import styles from './styles.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: undefined,
      next: undefined,
      operation: undefined,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownListener);
  }

  handleClick = buttonName => {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  };

  keyDownListener = e => {
    let buttonName = e.key;
    if (buttonName === 'Enter') buttonName = '=';
    if (buttonName === '/') buttonName = '÷';
    if (buttonName === '*') buttonName = 'X';
    if (buttonName === '-') buttonName = '-';
    if (buttonName === '+') buttonName = '+';
    const validButton = buttons.some(row => row.includes(buttonName));
    if (validButton) {
      this.handleClick(buttonName);
    }
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className={styles.calculator}>
        <h1 className={styles.math}>Let’s do some math!</h1>
        <div className={styles.app}>
          <Display total={total} next={next} operation={operation} />
          <ButtonPanel data={this.state} buttons={buttons} clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
