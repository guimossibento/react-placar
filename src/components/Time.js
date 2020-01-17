import React from 'react';

import BotaoGol from './BotaoGol';

export default class Time extends React.Component{
    render(){
        return (
            
            <div className="card" style={{"width": "12rem"}}>
            <div className="card-body">
              <h1 className="card-title">VASCO</h1>
              <h2 className="card-text">8</h2>
              <BotaoGol/>
              </div>
            </div>
        );
    }
}

