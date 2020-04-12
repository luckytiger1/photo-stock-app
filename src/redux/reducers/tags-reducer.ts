import { AppActions, SET_TAGS } from '../../types/actionTypes';

const INITIAL_STATE = {
  tags: [],
};

const tagsReducer = (state = INITIAL_STATE, action: AppActions) => {
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
