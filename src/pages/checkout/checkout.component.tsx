import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { AppState } from '../../store/index';
import { selectCartItems, selectCartTotalPrice, Item } from '../../store/cart';
import { CheckoutItemRedux as CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import { StripeCheckoutButton } from '../../components/stripe-button/stripe-button.component';

type Props = {
  cartItems: Item[];
  cartTotal: number;
}

const CheckoutPage: React.FC<Props> = ({ cartItems, cartTotal }): JSX.Element => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map((cartItem: Item) => {
          return <CheckoutItem key={cartItem.id} item={cartItem} />
        })
      }
      <div className='total'>
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
         <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotalPrice(state)
});

export const CheckoutPageRedux = connect(mapStateToProps, null)(CheckoutPage);
