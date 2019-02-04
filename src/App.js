import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav'
import Router from './Router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router />
      </div>
    )
  }
}

export default App;
