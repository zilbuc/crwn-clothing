import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRedux as App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { saveState } from './store/localStorage';

const store = configureStore();

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
