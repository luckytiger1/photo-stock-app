import _ from 'lodash';
import {
  SET_RELATED_IMAGES,
  AppActions,
  GET_RELATED_IMAGES,
} from '../../types/actionTypes';
import { RelatedListStateType } from './types/types';

const INITIAL_STATE: RelatedListStateType = {
  relatedImages: [],
};

const relatedListReducer = (
  state = INITIAL_STATE,
  action: AppActions,
): RelatedListStateType => {
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
