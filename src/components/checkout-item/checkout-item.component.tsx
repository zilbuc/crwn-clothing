import React from 'react';
import './checkout-item.styles.scss';
import { Item, addItem, removeItem, clearItem } from '../../store/cart';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

type Props = {
  item: Item;
  clearItem: typeof clearItem;
  addItem: typeof addItem;
  removeItem: typeof removeItem;
}

const CheckoutItem: React.FC<Props> = ({ item, clearItem, addItem, removeItem }): JSX.Element => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(item)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(item)} >&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: Item) => dispatch(clearItem(item)),
  addItem: (item: Item) => dispatch(addItem(item)),
  removeItem: (item: Item) => dispatch(removeItem(item))
})

export const CheckoutItemRedux = connect(null, mapDispatchToProps)(CheckoutItem)