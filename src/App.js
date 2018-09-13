import React, { Component } from 'react';
import logo from './assets/images/coffify.svg';
import cupOfCoffee from './assets/images/coffy.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to Coffify
            <img 
              src={cupOfCoffee}
              className="cupOfCoffee-img"
              alt="cupOfCoffee"
            />
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
