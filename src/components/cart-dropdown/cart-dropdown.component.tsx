import React from 'react';
import './cart-dropdown.styles.scss';
import { CustomButton } from '../custom-button/custom-button.component';

interface Props {

}

export const CartDropdown: React.FC<Props> = (): JSX.Element => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton > GO TO CHECKOUT </CustomButton>
    </div>
  )
}
