import React, { Component } from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

type Props = {};
type State = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialState: State = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export class SignUp extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = initialState;
  }

  handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      if (user) {
        await createUserProfileDocument(user, { displayName });

        this.setState({ ...initialState });
      }

    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    this.setState((prevState: State): State => ({
      ...prevState,
      [name]: value
    }))
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required />
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required />

          <CustomButton type='submit' > SIGN UP </CustomButton>
        </form>
      </div>
    )
  }
}
