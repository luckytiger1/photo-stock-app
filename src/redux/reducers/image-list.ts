import _ from 'lodash';

const INITIAL_STATE = {
  images: [],
  loading: true,
  error: null,
};

const updateImageList = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'FETCH_IMAGES_REQUEST':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'FETCH_IMAGES_SUCCESS':
      return {
        ...state,
        error: null,
        loading: false,
        images: _.uniqBy([...state.images, ...action.payload], 'id'),
      };

    case 'FETCH_IMAGES_FAILURE':
      return {
        ...state,
        images: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default updateImageList;
