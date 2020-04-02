import { createSelector } from 'reselect';

const imageListSelector = (state: any) => state.imageList;
// const searchImageListSelector = (state: any) => state.searchResults;

const imagesSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.images,
);
const searchImagesSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.searchResults,
);

const termSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.term,
);

const searchResultsSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.searchResults,
);

const imageIsLoadingSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.loading,
);

const favoritesSelector = createSelector(
  [imageListSelector],
  (imageList) => imageList.favorites,
);

const imagePageSelector = (imageUrlParam: any) =>
  createSelector(
    [imagesSelector, searchImagesSelector],
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
