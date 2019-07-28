import {
  CartState,
  CartActionTypes,
  CartActionCreatorTypes,
  addItemToCart
} from './index';

const initialState: CartState = {
  hidden: true,
  cartItems: []
}

export const cartReducer = (state = initialState, action: CartActionCreatorTypes): CartState => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // cartItems: [...state.cartItems, action.payload]
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}