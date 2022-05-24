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
        
        <img src={logo} className="App-logo" alt="logo" />
        <p> There is no god but Allah & Muhamad is the Messenger of Allah</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <p> Fully Automated Circle </p>

      </header>
      <footer>
        <a href= "https://github.com/naderkamelaponar/circle-ci-test" target="_blank"  rel="noopener noreferrer">Repo</a>
        <p>Nader Kamel</p>
        <p> محمد عطية</p>
      </footer>
    </div>
  );
}

export default App;
