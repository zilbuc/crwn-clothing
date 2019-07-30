import React from 'react';
import './collection-preview.styles.scss';
import { Item } from '../../store/cart';
import { CollectionItemRedux as CollectionItem } from '../../components/collection-item/collection-item.component';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
  title: string;
  items: Item[];
}

const CollectionPreview: React.FC<Props> = ({ title, items, history, match }): JSX.Element => {
  return (
    <div className='collection-preview'>
      <h1 className='title' onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item: Item, idx: number) => idx < 4)
          .map((item: Item): JSX.Element => {
            return <CollectionItem key={item.id} item={item} />
          })}
      </div>
    </div>
  )
};

export const CollectionPreviewRouted = withRouter(CollectionPreview);