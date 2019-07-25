import React from 'react';

import { Button } from 'antd'

function Card(props) {
  return (
    <div className="Card">
      <div className="card">
      <Button 
        type="primary"
        shape="circle"
        icon="like"
        //onClick={this.handleClick} 
      />
        <h1>{props.title}</h1>
        <p className="subtitulo">{props.subtitle}</p>
        <p>{props.description}</p>
    </div>
    </div>
  );
}

// handleClick = () => {
//   console.log('clicou')
// }

export default Card;
