import {
  AppActions,
  SET_RELATED_IMAGES,
  GET_RELATED_IMAGES,
} from '../../types/actionTypes';

const setRelatedImages = (images: object[]): AppActions => {
  return {
    type: SET_RELATED_IMAGES,
    payload: images,
  };
};

const getRelatedImages = (images: object[]): AppActions => {
  return {
    type: GET_RELATED_IMAGES,
    payload: images,
  };
};

export { setRelatedImages, getRelatedImages };
