import React from 'react';

import PlacarContainer from './PlacarContainer.js';

const dados ={
    partida:{
        estadio:"Maracana",
        data:"01/04/2019",
        horario :"19horas",
    },
    casa:{
        nome:"Vasco",
    },
    visitante:{
        nome:"Flamengo",
    }
}

export default class App extends React.Component{
    render(){
        return (
            <div>
              <PlacarContainer partida={dados.partida} casa={dados.casa} visitante={dados.visitante}/>
              
            </div>
        );
    }
}

