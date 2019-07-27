import { CurrentUser, UserActionTypes } from './user.types';

export const setCurrentUser = (user: CurrentUser) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});