import {
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES,
  AppActions,
} from '../../types/actionTypes';

const searchImagesLoaded = (newImages: object[]): AppActions => {
  return {
    type: SEARCH_IMAGES_SUCCESS,
    payload: newImages,
  };
};

const searchImages = (): AppActions => {
  return {
    type: SEARCH_IMAGES,
  };
};

export { searchImagesLoaded, searchImages };
