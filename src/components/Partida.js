import React from 'react';

export default class Partida extends React.Component{
    render(){
        return (
            <div className="card" style={{"width": "12rem"}}>
            <div className="card-body">
              <h1 className="card-title">Estadio</h1>
              <div>
                  <span  className="card-text">DATA</span>
                  <span  className="card-text">-</span>
                  <span  className="card-text">Hora</span>
              </div>
            </div>
            </div>
        );
    }
}

