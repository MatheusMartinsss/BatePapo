import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const GlobalContext = React.createContext(null)

const MensagensProvider = ({ children }) => {
    const [Mensagens, setMensagens] = useState([])
    const [UserAuth, setUserAuth] = useState(false)
    const [UserInfo, setUserInfo] = useState([])
    const addMensagem = (data) => {
        const timestamp = Date.now()
        const fomartedtimestamp = new Intl.DateTimeFormat('pt-BR', {year:'numeric', month: '2-digit', day: '2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(timestamp);
        console.log(fomartedtimestamp)
        const {Name, userID} = UserInfo
        const newMessage = {
            id: uuidv4(),
            userName: Name,
            userID: userID,
            mensagem: data,
            timestamp: fomartedtimestamp
        }
        setMensagens([...Mensagens, newMessage ])

    }
    const AuthRequest = (response) => {
        console.log(response)
        const { profileObj } = response
        const object = {
            userID:profileObj.googleId,
            Name: profileObj.name,
            AvatarUrl: profileObj.imageUrl,
        }
        setUserInfo(object)
        setUserAuth(true)
    }
    const LogoutRequest = () =>{
        setUserAuth(false)
        setUserInfo([])
    }
    return (
        <GlobalContext.Provider value={{ Mensagens, addMensagem, UserAuth, AuthRequest, UserInfo, LogoutRequest }} >
            {children}
        </GlobalContext.Provider>
    );
}

export default MensagensProvider;