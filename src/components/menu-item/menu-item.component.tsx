import React from 'react';
import './menu-item.styles.scss';

type Props = {
  title: string;
  imageUrl: string;
  size?: string;
  // size: string | undefined;
}

export const MenuItem: React.FC<Props> = ({ title, imageUrl, size }): JSX.Element => {
  return (
    <div className={`${size} menu-item`}>
      <div style={{ backgroundImage: `URL(${imageUrl})` }} className='background-image' />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div >
  );
};