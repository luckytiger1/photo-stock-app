import _ from 'lodash';
import {
  SET_RELATED_IMAGES,
  AppActions,
  GET_RELATED_IMAGES,
} from '../../types/actionTypes';

const INITIAL_STATE = {
  relatedImages: [],
};

const relatedListReducer = (state = INITIAL_STATE, action: AppActions) => {
  switch (action.type) {
    case SET_RELATED_IMAGES:
      return {
        ...state,
        relatedImages: _.uniqBy(
          [...state.relatedImages, ...action.payload],
          'id',
        ),
      };
    case GET_RELATED_IMAGES:
      return {
        ...state,
        relatedImages: [],
      };
    default:
      return state;
  }
};

export default relatedListReducer;
