import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import { SignIn } from '../../components/sign-in/sign-in.component'

export const SignInAndSignUpPage: React.FC<{}> = (): JSX.Element => {
  return (
    <div className='sign-in-and-sign-out'>
      <SignIn />
    </div>
  )
}