import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

export type Props = {
  children: React.ReactNode;
  type?: 'submit';
  onClick?: (event: React.SyntheticEvent<Element, Event>) => void; // TODO: double-check for type in CollectionItem
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: React.FC<Props> = ({ children, ...otherProps }): JSX.Element => {
  return (
    <CustomButtonContainer {...otherProps} >
      {children}
    </CustomButtonContainer>
  )
}
