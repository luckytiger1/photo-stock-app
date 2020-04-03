import _ from 'lodash';

const INITIAL_STATE = {
  searchResults: [],
  loading: true,
  error: null,
  term: '',
  searchHistory: [],
};

const searchImagesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SEARCH_IMAGES_REQUEST':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'SEARCH_IMAGES_SUCCESS':
      return {
        ...state,
        error: null,
        loading: false,
        searchResults: _.unionBy(
          [...state.searchResults, ...action.payload],
          'id',
        ),
      };

    case 'SEARCH_IMAGES_FAILURE':
      return {
        ...state,
        searchResults: [],
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
export default searchImagesReducer;
