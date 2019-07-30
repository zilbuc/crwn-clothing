import React from 'react';
import './collections-overview.component';
import { connect } from 'react-redux';
import { Collection, selectShopCollectionsForPreview } from '../../store/shop';
import { AppState } from '../../store/index';
import { CollectionPreviewRouted as CollectionPreview } from '../collection-preview/collection-preview.component';

type Props = {
  collections: Collection[]
}

const CollectionsOverview: React.FC<Props> = ({ collections }): JSX.Element => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...OtherCollectionProps }: Collection): JSX.Element => {
        return <CollectionPreview key={id} {...OtherCollectionProps} />
      })}
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return { collections: selectShopCollectionsForPreview(state) }
};

export const CollectionsOverviewRedux = connect(mapStateToProps)(CollectionsOverview);