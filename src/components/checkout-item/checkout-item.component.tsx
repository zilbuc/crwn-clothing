import React from 'react';
import './checkout-item.styles.scss';
import { Item } from '../../store/cart'

type Props = {
  item: Item;
}

export const CheckoutItemRedux: React.FC<Props> = ({ item: { imageUrl, price, name, quantity } }): JSX.Element => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button'>&#10005;</div>
    </div>
  )
}

