import {
  UserState,
  UserActionCreatorTypes,
  UserActionTypes
} from './user.types';

const initialState: UserState = {
  currentUser: null
}

export const userReducer = (state = initialState, action: UserActionCreatorTypes): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
} 