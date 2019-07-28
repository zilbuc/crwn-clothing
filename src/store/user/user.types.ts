// export type CurrentUser = {
//   id: string;
//   createdAt: {
//     seconds: number;
//     nanoseconds: number;
//   };
//   displayName: string;
//   email: string;
// }; // TODO: update type

export type CurrentUser = any;

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