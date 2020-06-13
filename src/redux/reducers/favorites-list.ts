import _ from 'lodash';
import { ADD_TO_FAVORITES, AppActions } from '../../types/actionTypes';
import { FavoritesListStateType } from './types/types';

const INITIAL_STATE: FavoritesListStateType = {
  favorites: [],
};

const updateFavorites = (image: any, favoritesList: any) => {
  if (favoritesList.includes(image)) {
    return favoritesList.filter((element: any) => element !== image);
  }

  return _.uniqBy([...favoritesList, image], 'id');
};

const favoritesListReducer = (
  state = INITIAL_STATE,
  action: AppActions,
): FavoritesListStateType => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: updateFavorites(action.payload, state.favorites),
      };
    default:
      return state;
  }
};
export default favoritesListReducer;
