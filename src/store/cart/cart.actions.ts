import { Item, CartActionTypes } from './cart.types';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
})

export const addItem = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = (item: Item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItem = (item: Item) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
})