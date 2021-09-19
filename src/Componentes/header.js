import React from 'react';

// import { Container } from './styles';
import Avatar from '@mui/material/Avatar';
import { GlobalContext } from '../Context/GlobalContext'
import './header.css'
function Header() {
    const { UserInfo, UserAuth } = React.useContext(GlobalContext)
    const { Name, AvatarUrl } = UserInfo;
    return (

        <div className='header-container'>
            <div >
                <h1> Bate-Papo</h1>
            </div>
            {UserAuth &&
                <div className='header-content'>
                    <Avatar src={AvatarUrl} />
                    <text>{Name}</text>
                </div>
            }

        </div>
    );
}

export default Header;