import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Calculator />
        <Quote />
      </>

    );
  }
}

export default App;
