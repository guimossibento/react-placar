import React from 'react';

import Time from './Time';
import Partida from './Partida.js';

export default class PlacarContainer extends React.Component {
   
    render() {
        return (
            
            <div>
                <div style={{float: "left", "marginRight":"10px"}}>
                    <h3>Casa</h3>
                    <Time/>
                </div>
                <div style={{float: "left", "marginRight":"10px"}}>
                    <Partida/>
                </div>
                <div style={{float: "left", "marginRight":"10px"}}>
                    <h3>Visitante</h3>
                    <Time/>
                </div>
                <div style={{clear:"both"}}></div>
            </div>
        );
    }
}