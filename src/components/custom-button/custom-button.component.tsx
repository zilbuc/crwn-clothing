import React from 'react';
import './custom-button.styles.scss';

type Props = {
  children: React.ReactNode;
  type?: 'submit';
  onClick?: (event: React.SyntheticEvent<Element, Event>) => void; // TODO: double-check for type in CollectionItem
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: React.FC<Props> = ({ children, isGoogleSignIn, inverted, ...otherProps }): JSX.Element => {
  return (
    <button
      className={
        `${isGoogleSignIn ? 'google-sign-in' : ''}
        ${inverted ? 'inverted' : ''}
        custom-button`} {...otherProps} >
      {children}
    </button>
  )
}
