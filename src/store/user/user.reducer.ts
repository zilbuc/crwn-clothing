import {
  UserState,
  SET_CURRENT_USER,
  UserActionTypes
} from './user.types';

const initialState: UserState = {
  currentUser: null
}

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
} 