import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { CurrentUser } from '../../store/user';

interface HeaderProps {
  currentUser: CurrentUser;
}

const Header: React.FC<HeaderProps> = ({ currentUser }): JSX.Element => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/' >
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop' >
          SHOP
        </Link>
        <Link className='option' to='/contact' >
          CONTACT
        </Link>
        {
          currentUser
            ? <div className='option' onClick={() => auth.signOut()} > SIGN OUT </div>
            : (<Link className='option' to='/signin' >
              SIGN IN
              </Link>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  currentUser: state.user.currentUser
});

export const HeaderRedux = connect(mapStateToProps, null)(Header);