import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
    this.handleCount = this.handleCount.bind(this)
  }

  handleCount() {
    this.setState({
      counter: this.state.counter +1,
    })

  }

  render() {
    return (
      <div>
        <header >
          <h1>Hangman</h1>
        </header>

        <input placeholder="enter letter here" />
        <button onClick={this.handleCount} value={this.state.counter}>guess letter</button>
        <br />
        {/* <input placeholder="enter word here" /> */}
        {/* <button name='go' onClick={this.handleCount}>guess word</button> */}
        <p>{this.state.counter}</p>
        
      </div>
    );
  }
}

export default App;
