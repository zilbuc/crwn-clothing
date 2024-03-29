import { createSelector } from 'reselect';
import { AppState } from '../index';

const selectShop = (state: AppState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectShopCollection = (collectionUrlParam: string) => createSelector(
  [selectShopCollections],
  collections => collections[collectionUrlParam]
);