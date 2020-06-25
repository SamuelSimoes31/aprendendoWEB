import React from 'react';
import Filho from './Filho'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props}/>
            <Filho nome="Carla1" {...props} />
            <Filho {...props} nome="Carla2"/>
        </ul>
    </div>