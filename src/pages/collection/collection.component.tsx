import React from 'react';
import './collection.styles.scss';
import { CollectionItemRedux as CollectionItem } from '../../components/collection-item/collection-item.component';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collection, selectShopCollection } from '../../store/shop';
import { Item } from '../../store/cart';
import { AppState } from '../../store';

interface Props extends RouteComponentProps {
  collection: Collection;
};

const CollectionPage: React.FC<Props> = ({ collection }): JSX.Element => {
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(
            (item: Item) => <CollectionItem key={item.id} item={item} />
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState, ownProps: Props) => {
  const data = Object.create(ownProps.match.params); // TODO: check for better solution

  return { collection: selectShopCollection(data.collectionId)(state) };
}

export const CollectionPageRedux = connect(mapStateToProps, null)(CollectionPage);