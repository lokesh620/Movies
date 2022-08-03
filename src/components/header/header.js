import React from 'react';
import { Link } from 'react-router-dom';
import UserImg from '../../images/userImage.png';
import './header.scss';

const header = () => {
    return (
        <div className='header'>
            <Link to='/'>
            <div className='logo'>Movie App</div>
            </Link>
            <div className='user-image'>
                <img src={UserImg} alt="user" />
            </div>

        </div>
    );
};

export default header;