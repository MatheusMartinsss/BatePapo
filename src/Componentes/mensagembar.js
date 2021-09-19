import React, { useState } from 'react';
import Input from '@mui/material/Input';
import { InputAdornment, FormControl, OutlinedInput } from '@mui/material';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { GlobalContext } from '../Context/GlobalContext'
import './mensagembar.css'

function MensagemBar() {
    const [Text, setText] = useState('')
    const { UserAuth, addMensagem } = React.useContext(GlobalContext)
    const onHandleChange = (e) => {
        setText(e)
        console.log(e)
    }
    const sendMessage = () => {
        addMensagem(Text)
        setText('')
        console.log('Mensagem enviada', Text)
    }
    return (
        <div className='mensagembar-container'>
            <FormControl fullWidth={true} variant="outlined">
                <OutlinedInput
                    disabled={!UserAuth}
                    style={{ backgroundColor: 'white' }}
                    value={Text}
                    placeholder='Digite sua mensagem...'
                    onChange = {(e) => onHandleChange(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && Text.length > 0 && sendMessage()}
                    endAdornment={
                        <InputAdornment position="end">
                            <ArrowForward />
                        </InputAdornment >
                    }
                />
            </FormControl>

        </div>
    );
}

export default MensagemBar;