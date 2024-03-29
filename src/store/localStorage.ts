import { AppState } from './index';

export const loadState = (): AppState | undefined => {
  try {
    const serializedState = localStorage.getItem('crownClothingReduxStore');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export const saveState = (state: AppState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('crownClothingReduxStore', serializedState);
  } catch (e) {
    // ignore write errors
  }
}