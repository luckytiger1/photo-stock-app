import _ from 'lodash';
import { ADD_TO_FAVORITES, AppActions } from '../../types/actionTypes';
import { FavoritesListStateType } from './types/types';

const INITIAL_STATE: FavoritesListStateType = {
  favorites: [],
};

const favoritesListReducer = (
  state = INITIAL_STATE,
  action: AppActions,
): FavoritesListStateType => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: _.uniqBy([...state.favorites, action.payload], 'id'),
      };
    default:
      return state;
  }
};
export default favoritesListReducer;
