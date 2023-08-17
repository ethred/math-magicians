import React, { useState } from 'react';
import Display from './Display';
import calculate from './logic/calculate';

const Calculator = () => {
  const [display, newDisplay] = useState({ total: 0, next: null, operation: null });

  const buttonClicked = (event) => {
    const btnName = event.target.innerText;
    const answer = calculate(display, btnName);
    newDisplay(answer);
  };

  const { total, next, operation } = display;

  return (
    <div className="calculator_header">
      <div className="calculator_page">
        <div className="calculator">
          <div className="calculator_container">
            <Display className="calculator_screen">
              {total}
              {operation}
              {next}
            </Display>
            <div className="calculator_UI">
              <button type="button" onClick={buttonClicked} value="clear">AC</button>
              <button type="button" onClick={buttonClicked} value="pos-neg">+/-</button>
              <button type="button" onClick={buttonClicked} value="%">%</button>
              <button type="button" onClick={buttonClicked} value="/" className="btn_opaque">÷</button>
              <button type="button" onClick={buttonClicked} value="7">7</button>
              <button type="button" onClick={buttonClicked} value="8">8</button>
              <button type="button" onClick={buttonClicked} value="9">9</button>
              <button type="button" onClick={buttonClicked} value="*" className="btn_opaque">x</button>
              <button type="button" onClick={buttonClicked} value="4">4</button>
              <button type="button" onClick={buttonClicked} value="5">5</button>
              <button type="button" onClick={buttonClicked} value="6">6</button>
              <button type="button" onClick={buttonClicked} value="-" className="btn_opaque">-</button>
              <button type="button" onClick={buttonClicked} value="1">1</button>
              <button type="button" onClick={buttonClicked} value="2">2</button>
              <button type="button" onClick={buttonClicked} value="3">3</button>
              <button type="button" onClick={buttonClicked} value="+" className="btn_opaque">+</button>
              <button type="button" onClick={buttonClicked} value="0" className="btn_large">0</button>
              <button type="button" onClick={buttonClicked} value=".">.</button>
              <button type="button" onClick={buttonClicked} value="=" className="btn_opaque">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
