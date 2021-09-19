import React from 'react';
import User from './user';

import './userslist.css'
import userImagem from './defaultuser.jpg'

const users = [{
    userID: 0,
    userName: 'User1',
    userAvatar: userImagem,

}, {
    userID: 1,
    userName: 'User2',
    userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',

}, {
    userID: 2,
    userName: 'User3',
    userAvatar: userImagem,

}, {
    userID: 3,
    userName: 'User4',
    userAvatar: userImagem,

}]

function UsersList() {
    return (
        <div className='userslist-container'>
            <div>
                {users.map((item) => (
                    <User user={item} />
                ))}
            </div>
        </div>
    );
}

export default UsersList;