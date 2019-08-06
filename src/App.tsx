import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { HeaderRedux as Header } from './components/header/header.component';
import { CheckoutPageRedux as CheckoutPage } from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { Unsubscribe } from 'firebase';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from './store';
import { CurrentUser, setCurrentUser, selectCurrentUser } from './store/user';
import { selectShopCollectionsForPreview, Collection } from './store/shop';
import { CollectionForFirebase } from './firebase/firebase.utils'

interface AppProps {
  currentUser: CurrentUser;
  setCurrentUser: typeof setCurrentUser;
  collectionsArray: Collection[]
}

class App extends Component<AppProps> {
  unsubsribeFromAuth: null | Unsubscribe = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    })

    const collectionsArrayForFirebase: CollectionForFirebase[] = collectionsArray.map(({ title, items }) => ({ title, items }));
    addCollectionAndDocuments('collections', collectionsArrayForFirebase);
  }

  componentWillUnmount() {
    if (this.unsubsribeFromAuth !== null) {
      this.unsubsribeFromAuth();
    }
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser
                ? (<Redirect to='/' />)
                : (<SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  currentUser: selectCurrentUser(state),
  collectionsArray: selectShopCollectionsForPreview(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: CurrentUser) => dispatch(setCurrentUser(user))
});

export const AppRedux = connect(mapStateToProps, mapDispatchToProps)(App);