const Calculator = () => (
  <div className="calculator">
    <div className="calculator_container">
      <div className="calculator_screen">0</div>
      <div className="calculator_UI">
        <button type="button" value="clear">AC</button>
        <button type="button" value="pos-neg">+/-</button>
        <button type="button" value="%">%</button>
        <button type="button" value="/" className="btn_opaque">÷</button>
        <button type="button" value="7">7</button>
        <button type="button" value="8">8</button>
        <button type="button" value="9">9</button>
        <button type="button" value="*" className="btn_opaque">X</button>
        <button type="button" value="4">4</button>
        <button type="button" value="5">5</button>
        <button type="button" value="6">6</button>
        <button type="button" value="-" className="btn_opaque">-</button>
        <button type="button" value="1">1</button>
        <button type="button" value="2">2</button>
        <button type="button" value="3">3</button>
        <button type="button" value="+" className="btn_opaque">+</button>
        <button type="button" value="0" className="btn_large">0</button>
        <button type="button" value=".">.</button>
        <button type="button" value="=" className="btn_opaque">=</button>
      </div>
    </div>
  </div>
);

export default Calculator;
