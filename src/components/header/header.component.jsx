import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../asset/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className="options">
            <Link className='option' to='/girls'>
                SHOP    
            </Link>
            <Link className='option' to='/girls'>
                CONTACT
            </Link>
        </div>

    </div>
)


export default Header;