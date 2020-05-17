import { createSelector } from 'reselect';
import { AppState } from '../reducers/types/types';

const relatedListSelector = (state: AppState) => state.relatedList;

const relatedImagesSelector = createSelector(
  [relatedListSelector],
  (relatedList) => relatedList.relatedImages,
);

export default relatedImagesSelector;
