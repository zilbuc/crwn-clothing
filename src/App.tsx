import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Header } from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
import { Unsubscribe } from 'firebase';

// interface currentUser {
//   id: number;
//   title: string;
//   routeName: string;
//   items: Item[]
// }

type Props = {
};

type State = {
  currentUser: any; // TODO: update type
};

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth: null | Unsubscribe = null;

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth !== null
      ? this.unsubsribeFromAuth()
      : console.log('pypt')
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
