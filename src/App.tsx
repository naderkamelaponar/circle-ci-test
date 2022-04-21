import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          بسم الله الرحمن الرحيم
        </p>
        <p> There is no god but Allah & Muhamad is the Messenger of Allah</p>
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         learn react
        </a>
        <p> Fully Automated Circle </p>

      </header>
    </div>
  );
}

export default App;
