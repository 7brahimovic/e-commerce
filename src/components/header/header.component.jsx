import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../toggle-button/toggle-button.component'

import { ReactComponent as Logo } from '../../asset/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
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
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                </div>
                    :
                    <Link className="option" to='/signin'>
                        SIGN IN
                </Link>
            }
            
            
            <ToggleButton type='submit'> Sign in </ToggleButton>
                

        </div>


    </div>
)


export default Header;