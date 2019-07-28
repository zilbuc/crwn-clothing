import {
  Item,
  CartState,
  CartActionTypes,
  CartActionCreatorTypes,
  addItemToCart,
  removeItemFromCart
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
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem: Item) => cartItem.id !== action.payload.id)
      }
    default:
      return state;
  }
}