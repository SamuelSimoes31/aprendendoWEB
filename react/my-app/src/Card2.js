import React from 'react';

import { Button } from 'antd'

class Card2 extends React.Component{

	state = {
		likes : 0
	}
	

	render(){
		let botao = (
			<Button 
					type="primary" 
					shape="circle"
					icon="search"
					onClick = {this.handleClick}
				/>
		)
		return(
			<div>
				{botao}
				{this.state.likes}
			</div>
		)
	}



	handleClick = () => {
		this.setState(
			{
				likes: this.state.likes + 1
			}
		)
	}

}


export default Card2;
