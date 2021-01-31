import React, { Component } from 'react';
import './App.css';
import Login from "../src/components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Wyprowadzanie psów</h1>
          <Login />
      </div>
    );
  }
}

export default App;
