import React, { Component } from 'react';
import { SHOP_DATA as collections } from './shop.data';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface Collections {
  id: number;
  title: string;
  routeName: string;
  items: Item[]
}

type Props = {
};

type State = {
  collections: Collections[];
};

export class ShopPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      collections: collections
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...OtherCollectionProps }: Collections): JSX.Element => {
          return <CollectionPreview key={id} {...OtherCollectionProps} />
        })}
      </div>
    )
  }
}
