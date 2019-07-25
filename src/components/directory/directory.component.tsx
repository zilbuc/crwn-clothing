import React, { Component } from 'react';
import { sections } from './directory.data';
import { MenuItem } from '../menu-item/menu-item.component';
import './directory.styles.scss';

interface Sections {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

type Props = {
  // label: string;
};

type State = {
  sections: Sections[];
};

export class Directory extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sections: sections
    }
  }

  render() {
    return (
      <div>
        <div className='directory-menu'>
          {this.state.sections.map(({ id, imageUrl, title, size }: Sections): JSX.Element => {
            return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          })}
        </div>
      </div>
    );
  }
}
