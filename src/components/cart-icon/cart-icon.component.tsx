import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleCart, selectCartItemsCount } from '../../store/cart';
import { AppState } from '../../store';


interface Props {
  toggleCart: typeof toggleCart;
  itemCount: number;
}

const CartIcon: React.FC<Props> = ({ toggleCart, itemCount }): JSX.Element => {
  return (
    <div className='cart-icon' onClick={toggleCart} >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'> {itemCount} </span>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});

export const CartIconRedux = connect(mapStateToProps, mapDispatchToProps)(CartIcon);