import _ from 'lodash';

const INITIAL_STATE = {
  favorites: [],
};

const favoritesListReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: _.uniqBy([...state.favorites, action.payload], 'id'),
      };
    default:
      return state;
  }
};
export default favoritesListReducer;
