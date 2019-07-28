// import { User } from 'firebase';
// export type CurrentUser = User;
export type CurrentUser = any; // TODO: update

export interface UserState {
  currentUser: CurrentUser;
}

export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

interface SetCurrentUserAction {
  type: typeof UserActionTypes.SET_CURRENT_USER;
  payload: CurrentUser;
}

export type UserActionCreatorTypes = SetCurrentUserAction; 