import React from 'react';
import User from './user';

import './userslist.css'
import { GlobalContext } from '../Context/GlobalContext';



function UsersList() {
    const {Users} = React.useContext(GlobalContext)
    console.log('UserList', Users)
    return (
        <div className='userslist-container'>
            <div>
                {Users.map((item) => (
                    <User user={item} />
                ))}
            </div>
        </div>
    );
}

export default UsersList;