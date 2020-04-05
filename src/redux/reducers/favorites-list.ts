import _ from 'lodash';
import { ADD_TO_FAVORITES, AppActions } from '../../types/actionTypes';

const INITIAL_STATE = {
  favorites: [],
};

const favoritesListReducer = (state = INITIAL_STATE, action: AppActions) => {
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
