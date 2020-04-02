import { combineReducers } from 'redux';
import updateImageList from './image-list';
import pageReducer from './pages';

const reducer = combineReducers({
  imageList: updateImageList,
  pages: pageReducer,
});

export default reducer;
