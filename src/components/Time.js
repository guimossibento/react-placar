import React from 'react';

import BotaoGol from './BotaoGol';

export default class Time extends React.Component{
    render(){
        return (
            
            <div className="card" style={{"width": "20rem"}}>
            <div className="card-body">
              <h1 className="card-title">{this.props.nome}</h1>
              <h2 className="card-text">{this.props.gols}</h2>
              <BotaoGol marcarGol={this.props.marcarGol}/>
              </div>
            </div>
        );
    }
}

