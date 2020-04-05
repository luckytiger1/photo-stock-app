import {
  SET_TERM,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  AppActions,
  FETCH_IMAGES_FAILURE,
  ADD_TO_FAVORITES,
  FETCH_IMAGES,
} from '../../types/actionTypes';

const imagesRequested = () => {
  return {
    type: FETCH_IMAGES_REQUEST,
  };
};

const imagesLoaded = (newImages: object[]): AppActions => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: newImages,
  };
};

const imagesFailed = (error: Error): AppActions => {
  return {
    type: FETCH_IMAGES_FAILURE,
    payload: error,
  };
};

const setTerm = (term: string): AppActions => {
  return {
    type: SET_TERM,
    payload: term,
  };
};

const addToFavorites = (image: object): AppActions => {
  return {
    type: ADD_TO_FAVORITES,
    payload: image,
  };
};

const fetchImages = (): AppActions => {
  return {
    type: FETCH_IMAGES,
  };
};

export {
  imagesRequested,
  imagesLoaded,
  imagesFailed,
  fetchImages,
  setTerm,
  addToFavorites,
};
