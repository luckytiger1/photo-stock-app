import _ from 'lodash';

const INITIAL_STATE = {
  images: [],
  loading: true,
  error: null,
  searchResults: [],
  term: '',
  searchHistory: [],
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

    case 'SEARCH_IMAGES_SUCCESS':
      return {
        ...state,
        error: null,
        loading: false,
        searchResults: _.uniqBy(
          [...state.searchResults, ...action.payload],
          'id',
        ),
      };

    case 'FETCH_IMAGES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case 'SET_TERM':
      return {
        ...state,
        loading: true,
        error: null,
        term: action.payload,
        searchResults: [],
        searchHistory: [
          ...state.searchHistory,
          action.payload.charAt(0).toUpperCase() + action.payload.slice(1),
        ],
      };

    default:
      return state;
  }
};
export default updateImageList;
