import { combineReducers } from 'redux';
import updateImageList from './image-list';
import pageReducer from './pages';
import favoritesListReducer from './favorites-list';
import searchImagesReducer from './search-images';

const reducer = combineReducers({
  imageList: updateImageList,
  pages: pageReducer,
  favoritesList: favoritesListReducer,
  searchList: searchImagesReducer,
});

export default reducer;
