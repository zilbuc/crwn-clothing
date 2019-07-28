import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { CurrentUser, selectCurrentUser } from '../../store/user';
import { selectCartHidden } from '../../store/cart';
import { CartIconRedux as CartIcon } from '../cart-icon/cart-icon.component';
import { CartDropdownReduxRouted as CartDropdown } from '../cart-dropdown/cart-dropdown.component';
// import { createStructuredSelector } from 'reselect';

interface HeaderProps {
  currentUser: CurrentUser;
  hidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }): JSX.Element => {
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
            : <Link className='option' to='/signin' > SIGN IN </Link>
        }
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  )
}

// const mapStateToProps = createStructuredSelector({ // TODO: update 
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden
// });
const mapStateToProps = (state: AppState) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

export const HeaderRedux = connect(mapStateToProps, null)(Header);