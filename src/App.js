import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Ricardo" />
    </div>
  );
}

export default App;
