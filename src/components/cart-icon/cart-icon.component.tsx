import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleCart } from '../../store/cart';

interface Props {
  toggleCart: typeof toggleCart;
}

const CartIcon: React.FC<Props> = ({ toggleCart }): JSX.Element => {
  return (
    <div className='cart-icon' onClick={toggleCart} >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'> 0 </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});

export const CartIconRedux = connect(null, mapDispatchToProps)(CartIcon);