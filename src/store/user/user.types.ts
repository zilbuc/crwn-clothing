export type CurrentUser = any; // TODO: update type

export interface UserState {
  currentUser: CurrentUser;
}

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: CurrentUser;
}

export type UserActionTypes = SetCurrentUserAction; 