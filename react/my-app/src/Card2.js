import React from 'react';

class Card extends React.Component{
	render(){
		return{
			
		}
	}
}

function Card(props) {
  return (
    <div className="Card">
      <div class="card">
        <h1>{props.title}</h1>
        <p class="subtitulo">Co-Worker</p>
        <p>Samuel num sabe o que tá fazendo</p>
    </div>
    </div>
  );
}

export default Card;
