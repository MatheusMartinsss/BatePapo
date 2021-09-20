import React from 'react';
import { Button } from '@mui/material'
import './login.css'
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleLogin } from 'react-google-login';
import { GlobalContext } from '../Context/GlobalContext'
function Login() {
    const onsuces = (response) =>{
        console.log(response)
    }
    const { AuthRequest } = React.useContext(GlobalContext)
    return (
        <div className='login-container'>
            <div className='login-body'>
                <h1>Entrar com</h1>
                <GoogleLogin
                    clientId="884058811837-nli74mq4ne1r451csv2b6ved6tfkvobm.apps.googleusercontent.com"
                    buttonText="Login"
                    cookiePolicy={'single_host_origin'}
                    onSuccess = {onsuces}
                />
            </div>
        </div>
    )
}

export default Login;