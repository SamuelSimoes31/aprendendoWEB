import React, { Component } from 'react'

import './Grid.css';

const initialState = []
initialState.length = 9



export class Grid extends Component {
    state = {
        currentValue: 'X',
        values: ['X','O','x','o','X','O','X','O','X']
    }

//    constructor(props){
//       super(props)
//        this.hover = this.hover.bind(this)
//    }

    hover(n){
        const values = [...this.state.values]
        values[n] = this.state.currentValue
        this.setState({
            values
        })
    }

    render() {
        return (
            <div>
                <div className="grid">
                    <div className="quadrado r-cima r-esquerda"     onMouseOver={n => this.hover && this.hover(0)}>{ this.state.values[0]}</div>
                    <div className="quadrado r-cima"                onMouseOver={n => this.hover && this.hover(1)}>{ this.state.values[1]}</div>
                    <div className="quadrado r-cima r-direita"      onMouseOver={n => this.hover && this.hover(2)}>{ this.state.values[2]}</div>
                    <div className="quadrado r-esquerda"            onMouseOver={n => this.hover && this.hover(3)}>{ this.state.values[3]}</div>
                    <div className="quadrado"                       onMouseOver={n => this.hover && this.hover(4)}>{ this.state.values[4]}</div>
                    <div className="quadrado r-direita"             onMouseOver={n => this.hover && this.hover(5)}>{ this.state.values[5]}</div>
                    <div className="quadrado r-baixo r-esquerda"    onMouseOver={n => this.hover && this.hover(6)}>{ this.state.values[6]}</div>
                    <div className="quadrado r-baixo"               onMouseOver={n => this.hover && this.hover(7)}>{ this.state.values[7]}</div>
                    <div className="quadrado r-baixo r-direita"     onMouseOver={n => this.hover && this.hover(8)}>{ this.state.values[8]}</div>
                </div>
            </div>
        )
    }
}

export default Grid


/*
    const hovers = []
    constructor(props){
        super(props)
        for(let i=0;i<9;i++){
            hovers.push(this.hover(indice).bind(this))
        }
        
        hovers.length = 9
        hovers.forEach(function (item, indice, hovers) {
            hovers[indice] = (indice) => this.hover && this.hover(indice)
        })
        
        
    }
    */