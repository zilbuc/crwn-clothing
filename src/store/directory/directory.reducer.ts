import { directoryData } from './directory.data';
import { DirectoryState } from './index';

const initialState: DirectoryState = directoryData;

export const directoryReducer = (state = initialState, action: { type: string }): DirectoryState => {
  switch (action.type) {
    default:
      return state;
  }
}