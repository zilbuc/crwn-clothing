import React from 'react';
import './collection-preview.styles.scss';
import { Item } from '../../store/cart';
import { CollectionItemRedux as CollectionItem } from '../../components/collection-item/collection-item.component';

type Props = {
  title: string;
  items: Item[];
}

export const CollectionPreview: React.FC<Props> = ({ title, items }): JSX.Element => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item: Item, idx: number) => idx < 4)
          .map((item: Item): JSX.Element => {
            return <CollectionItem key={item.id} item={item} />
          })}
      </div>
    </div>
  )
}

