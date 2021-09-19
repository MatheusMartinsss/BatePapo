import React from 'react';

import './mensagem.css'

function Mensagem(props) {
    const {id, userID, mensagem, userName, timestamp} = props.msg;
    console.log(id)
    return (
        <div className = 'mensagem-container' key = {props.Key}>
            <div className = 'mensagem-card'>
                <div className = 'mensagem-header'>
                    <text>{userName}</text>
                </div>
                <div className = 'mensagem-body'>
                    <text>{mensagem}</text>
                </div>
                <div className = 'mensagem-footer'>
                    <text>{timestamp}</text>
                </div>
            </div>
        </div>
    );
}

export default Mensagem;