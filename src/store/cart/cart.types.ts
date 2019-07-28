export interface CartState {
  hidden: boolean;
}

export const CartActionTypes = {
  TOGGLE_CART: 'TOGGLE_CART'
}

interface ShowCartAction {
  type: typeof CartActionTypes.TOGGLE_CART;
}

export type CartActionCreatorTypes = ShowCartAction; 