import React from 'react';
import './menu-item.styles.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: React.FC<Props> = ({ title, imageUrl, size, linkUrl, history, match }): JSX.Element => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
      <div style={{ backgroundImage: `URL(${imageUrl})` }} className='background-image' />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div >
  );
};

// TODO: add prop types?
export const MenuItemRouted = withRouter(MenuItem);
