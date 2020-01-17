import React from 'react';

export default class Partida extends React.Component{
    render(){
        return (
            <div className="card" >
            <div className="card-body">
              <h1 className="card-title">{this.props.estadio}</h1>
              <div>
                  <span  className="card-text">{this.props.data}</span>
                  <span  className="card-text">-</span>
                  <span  className="card-text">{this.props.hora}</span>
              </div>
            </div>
            </div>
        );
    }
}

