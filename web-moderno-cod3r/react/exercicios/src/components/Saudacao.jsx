import React, { Component } from 'react';

class Saudacao extends Component {

    // state = {
    //     tipo: "Fala",
    //     nome: "Pedro"
    // }
    state = this.props

    setTipo(e){
        // console.log(e.target.value)
        // this.props.tipo = e.target.value // NÃO PODE ALTERAR PROPS
        this.setState({
            tipo: e.target.value
        })
    }
    setNome(e){
        this.setState({
            nome: e.target.value
        })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" name="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" name="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        );
    }
}

export default Saudacao;