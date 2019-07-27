import { CurrentUser, SET_CURRENT_USER } from './user.types';

export const setCurrentUser = (user: CurrentUser) => ({
  type: SET_CURRENT_USER,
  payload: user
});