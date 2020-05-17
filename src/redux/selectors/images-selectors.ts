import { createSelector } from 'reselect';
import { AppState } from '../reducers/types/types';

const imageListSelector = (state: AppState) => state.imageList;
const favoritesListSelector = (state: AppState) => state.favoritesList;

const imagesSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.images,
);
const searchResultsSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.searchResults,
);

const termSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.term,
);

const imageIsLoadingSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.loading,
);

const favoritesSelector = createSelector(
  [favoritesListSelector],
  (favoritesList) => favoritesList.favorites,
);

const imagePageSelector = (imageUrlParam: string) =>
  createSelector(
    [imagesSelector, searchResultsSelector],
    (imageList, searchResults) =>
      [...imageList, ...searchResults].find(
        (image: any) => image.id === imageUrlParam,
      ),
  );
export {
  imagesSelector,
  termSelector,
  searchResultsSelector,
  imageIsLoadingSelector,
  favoritesSelector,
  imagePageSelector,
};
