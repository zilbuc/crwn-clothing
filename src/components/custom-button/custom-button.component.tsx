import React from 'react';
import './custom-button.styles.scss';

type Props = {
  children: React.ReactNode;
  type?: 'submit';
  onClick?: (event: React.SyntheticEvent<Element, Event>) => void;
  isGoogleSignIn?: boolean; // TODO: add type
}

export const CustomButton: React.FC<Props> = ({ children, isGoogleSignIn, ...otherProps }): JSX.Element => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
      {children}
    </button>
  )
}
