import React from 'react';
import './cart-item.styles.scss';
import { Item } from '../../store/cart';

type Props = {
  item: Item;
};

export const CartItem: React.FC<Props> = ({ item: { imageUrl, price, name, quantity } }): JSX.Element => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}