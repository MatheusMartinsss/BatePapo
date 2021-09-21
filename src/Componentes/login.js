import React from 'react';
import './login.css'
import { GoogleLogin } from 'react-google-login';
import { GlobalContext } from '../Context/GlobalContext'
function Login() {
    const { AuthRequest } = React.useContext(GlobalContext)
    return (
        <div className='login-container'>
            <div className='login-body'>
                <h1>Entrar com</h1>
                <GoogleLogin
                    clientId="884058811837-nli74mq4ne1r451csv2b6ved6tfkvobm.apps.googleusercontent.com"
                    
                    buttonText="Google"
                    cookiePolicy={'single_host_origin'}
                    onSuccess = {() => AuthRequest}
                    onFailure = {console.log('falhou')}
                />
            </div>
        </div>
    )
}

export default Login;