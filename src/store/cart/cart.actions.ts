import { Item, CartActionTypes } from './cart.types';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
})

export const addItem = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})