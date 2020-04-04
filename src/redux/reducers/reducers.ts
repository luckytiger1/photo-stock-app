import { combineReducers } from 'redux';
import updateImageList from './image-list';
import pageReducer from './pages';
import favoritesListReducer from './favorites-list';
import relatedListReducer from './related-list';
import tagsReducer from './tags-reducer';

const reducer = combineReducers({
  imageList: updateImageList,
  pages: pageReducer,
  favoritesList: favoritesListReducer,
  relatedList: relatedListReducer,
  tagsList: tagsReducer,
});

export default reducer;
