/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import buttons from '../buttons/buttons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel data={this.state} buttons={buttons} clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
