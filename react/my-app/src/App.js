import React from 'react';

import './App.css';
import Card from './Card'
import Card2 from './Card2'

import 'antd/dist/antd.css'

function App(props) {
  return (
    <div className="App">
      <Card 
        title="Samuel Simões"
        subtitle="Subtitulo"
        description="descricao"
      />
      <Card2 

      />
    </div>
  );
}

export default App;
