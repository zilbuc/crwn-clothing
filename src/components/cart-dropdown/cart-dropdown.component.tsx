import React from 'react';
import './cart-dropdown.styles.scss';
import { CustomButton } from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../store/index';
import { Item, selectCartItems, toggleCart } from '../../store/cart';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
  cartItems: Item[];
  dispatch: Dispatch;
  // toggleCart: typeof toggleCart;
}

const CartDropdown: React.FC<Props> = ({ cartItems, history, dispatch, ...otherProps }): JSX.Element => {
  const goToCheckout = (): void => {
    history.push('/checkout');
    dispatch(toggleCart());
  }

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length
            ? cartItems.map((cartItem: Item) => {
              return <CartItem key={cartItem.id} item={cartItem} />
            })
            : <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => goToCheckout()}> GO TO CHECKOUT </CustomButton>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state)
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   toggleCart: () => dispatch(toggleCart())
// })

export const CartDropdownReduxRouted = withRouter(connect(mapStateToProps)(CartDropdown));