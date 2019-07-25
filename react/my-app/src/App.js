import React from 'react';

import Card from './Card'

import './App.css';


function App(props) {
  return (
    <div className="App">
      <Card 
        title="Samuel Simões"
        subtitle="Subtitulo"
        description="descricao"
      />
      <Card 
        title="Samuel Simão"
        subtitle="Subtitulo"
        description="descricao"
      />
    </div>
  );
}

export default App;
