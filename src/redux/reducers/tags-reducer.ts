import { AppActions, SET_TAGS } from '../../types/actionTypes';
import { TagsStateType } from './types/types';

const INITIAL_STATE: TagsStateType = {
  tags: [],
};

const tagsReducer = (
  state = INITIAL_STATE,
  action: AppActions,
): TagsStateType => {
  switch (action.type) {
    case SET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
};

export default tagsReducer;
