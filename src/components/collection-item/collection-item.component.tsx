import React from 'react';
import { Item, addItem } from '../../store/cart';
import './collection-item.styles.scss';
import { CustomButton } from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

type Props = {
  item: Item;
  addItem: typeof addItem;
}

const CollectionItem: React.FC<Props> = ({ item, addItem }): JSX.Element => {
  const { name, price, imageUrl } = item;

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
      <CustomButton inverted onClick={() => addItem(item)} > Add to cart </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: Item) => dispatch(addItem(item))
})

export const CollectionItemRedux = connect(null, mapDispatchToProps)(CollectionItem);