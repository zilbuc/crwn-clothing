import React, { Component } from 'react';
import './sign-in.styles.scss';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

type Props = {};

type State = {
  email: string;
  password: string;
};

export class SignIn extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    this.setState((prevState: State): State => ({
      ...prevState,
      [name]: value
    }))
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} >
          <FormInput
            name='email'
            type='email'
            value={email}
            handleChange={this.handleChange}
            label='email'
            required />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='password'
            required />

          <div className='buttons'>
            <CustomButton type='submit' > Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
              {' '} Sign In With Google {' '}
            </CustomButton>
          </div>
        </form>

      </div>
    )
  }
}
