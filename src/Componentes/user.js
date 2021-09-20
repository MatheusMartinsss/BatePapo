import React from 'react';
import './user.css'

function User(props) {
    const {userID, Name, AvatarUrl} = props.user;
    return (
        <div className = 'user-card'>
            <div className = 'user-icone'>
                <img src = {AvatarUrl} alt = ''></img>
            </div>
            <text>{Name}</text>
        </div>
    );
}

export default User;