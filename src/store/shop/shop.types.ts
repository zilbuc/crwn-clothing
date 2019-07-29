import { Item } from '../cart/index';

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: Item[]
};

export interface ShopState {
  collections: {
    [key: string]: Collection
  }
}