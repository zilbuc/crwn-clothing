import { ShopState } from './index';
import { shopData } from './shop.data';

const initialState: ShopState = {
  collections: shopData
}

export const shopReducer = (state = initialState, action: { type: string }): ShopState => {
  switch (action.type) {
    default:
      return state;
  }
}