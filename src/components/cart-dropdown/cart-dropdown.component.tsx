import React from 'react';
import './cart-dropdown.styles.scss';
import { CustomButton } from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { AppState } from '../../store/index';
import { Item, selectCartItems } from '../../store/cart';

interface Props {
  cartItems: Item[]
}

const CartDropdown: React.FC<Props> = ({ cartItems }): JSX.Element => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map((cartItem: Item) => {
            return <CartItem key={cartItem.id} item={cartItem} />
          })
        }
      </div>
      <CustomButton > GO TO CHECKOUT </CustomButton>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state)
});

export const CartDropdownRedux = connect(mapStateToProps, null)(CartDropdown);