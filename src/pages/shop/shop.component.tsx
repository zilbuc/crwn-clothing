import React from 'react';
import { CollectionsOverviewRedux as CollectionsOverview } from '../../components/collections-overview/collections-overview.component';
import { CollectionPageRedux as CollectionPage } from '../collection/collection.component';
import { RouteComponentProps, Route } from 'react-router-dom';

interface Props extends RouteComponentProps { };

export const ShopPage: React.FC<Props> = ({ match }): JSX.Element => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}
