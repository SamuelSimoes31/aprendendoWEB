import React, { Component } from 'react';

class Saudacao extends Component {

    state = this.props

    constructor(props) {
        super(props)
        this.setNome = this.setNome.bind(this)
    }

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
                <input type="text" name="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
            </div>
        );
    }
}

export default Saudacao;