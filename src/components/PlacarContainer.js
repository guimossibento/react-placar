import React from 'react';

import Time from './Time';
import Partida from './Partida.js';

export default class PlacarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
        };
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        });
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        });
    }
    anularGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa - 1,
        });
    }

    anularGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante - 1,
        });
    }

    render() {
        const { partida, casa, visitante } = this.props;
        const estilo = { float: "left", "marginRight": "10px", "text-align": "center" }

        return (

            <div style={{ marginLeft: '15%', "display": "flex", "align-items": "center" }}>
                <div style={estilo}>
                    <h3>Casa</h3>
                    <Time nome={casa.nome} gols={this.state.gols_casa} marcarGol={this.marcarGolCasa.bind(this)} anularGol = {this.anularGolCasa.bind(this)} />
                </div>
                <div style={estilo}>
                    <Partida {...partida} />
                </div>
                <div style={estilo}>
                    <h3>Visitante</h3>
                    <Time nome={visitante.nome} gols={this.state.gols_visitante} marcarGol={this.marcarGolVisitante.bind(this)} anularGol = {this.anularGolVisitante.bind(this)}/>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
        );
    }
}

PlacarContainer.propTypes = {
    clima: React.PropTypes.string,
    tempo: React.PropTypes.number.isRequired,
}

PlacarContainer.defaultProps = {
    clima: 'Ensolarado',
}