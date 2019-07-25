import React from 'react';

import logo from './logo.svg';

function Card(props) {
  return (
    <div className="Card">
      <div className="card">
        <h1>{props.title}</h1>
        <p className="subtitulo">{props.subtitle}</p>
        <p>{props.description}</p>
    </div>
    </div>
  );
}

export default Card;
