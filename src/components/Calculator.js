import React, { Component } from 'react';
import calculate from './logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  buttonClicked = (event) => {
    const btnName = event.target.innerText;
    const answer = calculate(this.state, btnName);
    this.setState(answer);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <div className="calculator_container">
          <div className="calculator_screen">
            {total}
            {operation}
            {next}
          </div>
          <div className="calculator_UI">
            <button type="button" onClick={this.buttonClicked} value="clear">AC</button>
            <button type="button" onClick={this.buttonClicked} value="pos-neg">+/-</button>
            <button type="button" onClick={this.buttonClicked} value="%">%</button>
            <button type="button" onClick={this.buttonClicked} value="/" className="btn_opaque">÷</button>
            <button type="button" onClick={this.buttonClicked} value="7">7</button>
            <button type="button" onClick={this.buttonClicked} value="8">8</button>
            <button type="button" onClick={this.buttonClicked} value="9">9</button>
            <button type="button" onClick={this.buttonClicked} value="*" className="btn_opaque">x</button>
            <button type="button" onClick={this.buttonClicked} value="4">4</button>
            <button type="button" onClick={this.buttonClicked} value="5">5</button>
            <button type="button" onClick={this.buttonClicked} value="6">6</button>
            <button type="button" onClick={this.buttonClicked} value="-" className="btn_opaque">-</button>
            <button type="button" onClick={this.buttonClicked} value="1">1</button>
            <button type="button" onClick={this.buttonClicked} value="2">2</button>
            <button type="button" onClick={this.buttonClicked} value="3">3</button>
            <button type="button" onClick={this.buttonClicked} value="+" className="btn_opaque">+</button>
            <button type="button" onClick={this.buttonClicked} value="0" className="btn_large">0</button>
            <button type="button" onClick={this.buttonClicked} value=".">.</button>
            <button type="button" onClick={this.buttonClicked} value="=" className="btn_opaque">=</button>
          </div>
        </div>
      </div>
    );
  }
}
