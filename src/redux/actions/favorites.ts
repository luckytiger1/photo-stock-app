import { ADD_TO_FAVORITES, AppActions } from '../../types/actionTypes';

const addToFavorites = (image: object): AppActions => {
  return {
    type: ADD_TO_FAVORITES,
    payload: image,
  };
};

export default addToFavorites;
