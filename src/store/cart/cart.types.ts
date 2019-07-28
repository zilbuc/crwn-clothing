import { AnyAction } from 'redux';

export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

export interface CartState {
  hidden: boolean;
  cartItems: Item[];
}

export const CartActionTypes = {
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM: 'CLEAR_ITEM'
}

interface ShowCartAction extends AnyAction {  // TODO: double-check
  type: typeof CartActionTypes.TOGGLE_CART;
}

interface AddItem {
  type: typeof CartActionTypes.ADD_ITEM;
  payload: Item;
}

interface RemoveItem {
  type: typeof CartActionTypes.REMOVE_ITEM;
  payload: Item;
}

interface ClearItem {
  type: typeof CartActionTypes.CLEAR_ITEM;
  payload: Item;
}

export type CartActionCreatorTypes = ShowCartAction | AddItem | RemoveItem | ClearItem; 