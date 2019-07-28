import { createSelector } from 'reselect';
import { AppState } from '../index';
import { Item } from '../cart';

const selectCart = (state: AppState) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity: number, cartItem: Item) => {
      return cartItem.quantity
        ? accumulatedQuantity + cartItem.quantity
        : accumulatedQuantity
    },
    0
  )
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedPrice: number, cartItem: Item) => {
      return cartItem.quantity
        ? accumulatedPrice + cartItem.price * cartItem.quantity
        : accumulatedPrice
    },
    0
  )
);