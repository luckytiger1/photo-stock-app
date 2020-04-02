import _ from 'lodash';

const updateImages = (images: any, data: any) => {
  const firstSlice = _.concat(
    _.slice(images, 0, images.length / 3),
    _.slice(data, 0, 10),
  );
  const secondSlice = _.concat(
    _.slice(images, images.length / 3, (images.length / 3) * 2),
    _.slice(data, 10, 20),
  );
  const thirdSlice = _.concat(
    _.slice(images, (images.length / 3) * 2, images.length),
    _.slice(data, 20, 30),
  );

  return _.uniqBy([...firstSlice, ...secondSlice, ...thirdSlice], 'id');
};

const INITIAL_STATE = {
  images: [],
  searchResults: [],
  loading: true,
  error: null,
  term: '',
  searchHistory: [],
  favorites: [],
};

const updateImageList = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'FETCH_IMAGES_REQUEST':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'FETCH_IMAGES_SUCCESS': {
      const newImageList = action.payload;
      return {
        ...state,
        error: null,
        loading: false,
        images: [...updateImages(state.images, newImageList)],
      };
    }
    case 'SEARCH_IMAGES_REQUEST':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'SEARCH_IMAGES_SUCCESS': {
      const newImageList = action.payload;
      return {
        ...state,
        error: null,
        loading: false,
        searchResults: updateImages(state.searchResults, newImageList),
        // searchResults: _.uniqBy(
        //   [...state.searchResults, ...newImageList],
        //   'id',
        // ),
      };
    }
    case 'FETCH_IMAGES_FAILURE':
      return {
        ...state,
        searchResults: [],
        images: [],
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
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: _.uniqBy([...state.favorites, action.payload], 'id'),
      };
    case 'MAIN_PAGE_UNLOADED':
      return {
        ...state,
        images: [],
      };
    default:
      return state;
  }
};
export default updateImageList;
