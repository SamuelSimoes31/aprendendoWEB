import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'
import {BoaTarde, BoaNoite} from './components/Multiplos'

import Saudacao from './components/Saudacao'

// const elemento = <h1>React 2</h1>

ReactDOM.render(
    <div>
        {/* <BomDia nome="Guilherme" idade={10}/>
        <BoaTarde nome="Ana"/>
        <BoaNoite nome="bia"/> */}
        <Saudacao tipo="Bom dia" nome="João"/>
    </div>
,document.getElementById('root'))