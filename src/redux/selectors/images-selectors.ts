import { createSelector } from 'reselect';

const imageListSelector = (state: any) => state.imageList;
const favoritesListSelector = (state: any) => state.favoritesList;

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

const imagePageSelector = (imageUrlParam: any) =>
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
