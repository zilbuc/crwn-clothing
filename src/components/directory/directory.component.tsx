import React, { Component } from 'react';
import { sections } from './directory.data';
import { MenuItemRouted as MenuItem } from '../menu-item/menu-item.component';
import './directory.styles.scss';

interface Sections {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

// type Props = {
// };

type State = {
  sections: Sections[];
};

export class Directory extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      sections: sections
    }
  }

  render() {
    return (
      <div>
        <div className='directory-menu'>
          {this.state.sections.map(({ id, ...OtherSectionProps }: Sections): JSX.Element => {
            return <MenuItem key={id} {...OtherSectionProps} />
          })}
        </div>
      </div>
    );
  }
}
