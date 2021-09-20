import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import socketIOClient, { io } from 'socket.io-client'
export const GlobalContext = React.createContext(null)


const SOCKET_SERVER_URL = 'https://batepap.herokuapp.com';
const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const MensagensProvider = ({ children }) => {
    const [Mensagens, setMensagens] = useState([])
    const [UserAuth, setUserAuth] = useState(false)
    const [UserInfo, setUserInfo] = useState([])
    const [Users, setUsers] = useState([])
    const socketRef = useRef()
    const socket = io()
    useEffect(() =>{
        socketRef.current = socketIOClient(SOCKET_SERVER_URL, {transports: ['websocket']  })
        if(UserAuth){
            socketRef.current.emit('Join', {
                ...UserInfo
            })
            socketRef.current.on('UpdateUserList', (user) =>{
                console.log(user)
                setUsers((Users) => user)
            } )
          
        }
        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) =>{
            setMensagens((Mensagens) => [...Mensagens, message])
        })

    },[UserAuth])
    const addMensagem = (data) => {
        const timestamp = Date.now()
        const fomartedtimestamp = new Intl.DateTimeFormat('pt-BR', {year:'numeric', month: '2-digit', day: '2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(timestamp);
        console.log(fomartedtimestamp)
        const {Name, userID} = UserInfo;
        const newMessage = {
            id: uuidv4(),
            userName: Name,
            userID: userID,
            mensagem: data,
            timestamp: fomartedtimestamp
        };
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            ...newMessage
        })
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
        <GlobalContext.Provider value={{ Mensagens, addMensagem, UserAuth, AuthRequest, Users, UserInfo, LogoutRequest }} >
            {children}
        </GlobalContext.Provider>
    );
}

export default MensagensProvider;