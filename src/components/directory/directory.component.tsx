import React from 'react';
import { Section, selectDirectorySections } from '../../store/directory';
import { MenuItemRouted as MenuItem } from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { AppState } from '../../store/index';

type Props = {
  sections: Section[]
};

const Directory: React.FC<Props> = ({ sections }): JSX.Element => {

  return (
    <div>
      <div className='directory-menu'>
        {sections.map(({ id, ...OtherSectionProps }: Section): JSX.Element => {
          return <MenuItem key={id} {...OtherSectionProps} />
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  sections: selectDirectorySections(state)
});

export const DirectoryRedux = connect(mapStateToProps, null)(Directory);
