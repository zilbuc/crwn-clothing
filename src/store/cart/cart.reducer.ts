import {
  CartState,
  CartActionTypes,
  CartActionCreatorTypes
} from './index';

const initialState: CartState = {
  hidden: true
}

export const cartReducer = (state = initialState, action: CartActionCreatorTypes) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}