import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage: React.FC = (): JSX.Element => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

export const App: React.FC = (): JSX.Element => {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}
