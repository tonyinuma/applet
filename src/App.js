import React from 'react';
import logo from './zuve.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="pp">
          Ya estoy aquí ♥
        </p>
        <a
          className="App-link"
          href="https://industriaszuve.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          React JS
        </a>
      </header>
    </div>
  );
}

export default App;
