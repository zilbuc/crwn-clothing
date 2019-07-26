import React from 'react';
import './custom-button.styles.scss';

type Props = {
  children: React.ReactNode;
  type: 'submit';
}

export const CustomButton: React.FC<Props> = ({ children, ...otherProps }): JSX.Element => {
  return (
    <button className='custom-button' {...otherProps} >
      {children}
    </button>
  )
}
