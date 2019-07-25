import React from 'react';
import './collection-preview.styles.scss';
import { Item } from '../../pages/shop/shop.component';
import { CollectionItem } from '../../components/collection-item/collection-item.component';

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
          .filter((item: Item) => item.id < 5)
          .map(({ ...CollectionItemProps }: Item): JSX.Element => {
            return <CollectionItem key={CollectionItemProps.id} {...CollectionItemProps} />
          })}
      </div>
    </div>
  )
}

