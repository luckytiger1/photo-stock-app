import _ from 'lodash';

const INITIAL_STATE = {
  relatedImages: [],
};

const relatedListReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_RELATED_IMAGES':
      return {
        ...state,
        relatedImages: _.uniqBy(
          [...state.relatedImages, ...action.payload],
          'id',
        ),
      };
    case 'GET_RELATED_IMAGES':
      return {
        ...state,
        relatedImages: [],
      };
    default:
      return state;
  }
};

export default relatedListReducer;
