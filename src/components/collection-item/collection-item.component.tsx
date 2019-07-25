import React from 'react';
import { Item } from '../../pages/shop/shop.component';
import './collection-item.styles.scss';

// type Props = Item;

export const CollectionItem: React.FC<Item> = ({ name, price, imageUrl }): JSX.Element => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  )
}