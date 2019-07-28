import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Grid'
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JOGO DA VELHA</h1>
        <hr/>
        <Grid />
      </header>
    </div>
  );
}

export default App;
