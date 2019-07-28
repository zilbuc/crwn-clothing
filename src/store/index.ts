import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './user';
import { cartReducer } from './cart';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const middlewares = [logger, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  );

  return store;
}
