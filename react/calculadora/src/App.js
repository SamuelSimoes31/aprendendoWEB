import React from 'react';
import './App.css';
import { Button } from 'antd'
import 'antd/dist/antd.css'

class App extends React.Component {

  state = {
    num : "aaa"
  }

  

  render(){


    const botao = []
    for (let i = 0; i < 10; i++) {
      botao.push(
        <Button className="Botao" type="primary" shape="circle" onClick={this.handleClick}>{i}</Button>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>AAA MANO. Agora foi</p>
          {this.state.num}
          <div className="Linha">
            {botao[1]}
            {botao[2]}
            {botao[3]}
          </div>
          <div className="linha">
            {botao[4]}
            {botao[5]}
            {botao[6]}
          </div>
          <div className="linha">
            {botao[7]}
            {botao[8]}
            {botao[9]}
          </div>
          
        </header>
      </div>
    );
  }

  handleClick = () => {
    this.setState(
      {
        num : "aff"
      }
    )
  }

}

export default App;
