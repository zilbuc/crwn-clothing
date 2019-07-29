import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { userReducer } from './user';
import { cartReducer } from './cart';
import { loadState } from './localStorage';

// const rootReducer = combineReducers<any, AnyAction>({ // TODO: double-check
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export type AppState = ReturnType<typeof rootReducer>;

type composeType = typeof compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: composeType;
  }
}


export const configureStore = () => {
  const persistedState: AppState | undefined = loadState();

  const middlewares = [logger, thunkMiddleware];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(
    rootReducer,
    persistedState,
    enhancer
  );

  return store;
}
