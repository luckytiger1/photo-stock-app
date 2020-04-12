import { createSelector } from 'reselect';

const relatedListSelector = (state: any) => state.relatedList;

const relatedImagesSelector = createSelector(
  [relatedListSelector],
  (relatedList) => relatedList.relatedImages,
);

export default relatedImagesSelector;
