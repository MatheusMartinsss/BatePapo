import React from 'react';
import Mensagem from './mensagem';
import MensagemBar from './mensagembar';
import { GlobalContext } from '../Context/GlobalContext';
import './mensagens.css'

function Mensagens() {
    const {Mensagens} = React.useContext(GlobalContext)
    return (
        <div className='mensagens-container'>
            <div className = 'mensagens-box'>
                {Mensagens.map((item, key) => (
                    <div>
                        <Mensagem Key = {key} msg={item} />
                    </div>
                ))}
            </div>
            <MensagemBar/>
        </div>
    );
}

export default Mensagens;