import React from 'react';
import './user.css'

function User(props) {
    const {userID, userName, userAvatar} = props.user;
    return (
        <div className = 'user-card'>
            <div className = 'user-icone'>
                <img src = {userAvatar} alt = ''></img>
            </div>
            <text>{userName}</text>
        </div>
    );
}

export default User;