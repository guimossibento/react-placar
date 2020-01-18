import React from 'react';

export default class BotaoAnulaGol extends React.Component{

    handleClick(event){
        event.preventDefault();
        this.props.marcarGol();
    }
    render(){
        return (
            <button onClick={this.handleClick.bind(this)} className="btn btn-danger">Anular</button>
        );
    }
}

