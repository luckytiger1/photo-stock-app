import { createSelector } from 'reselect';
import { AppState } from '../reducers/types/types';

const tagsListSelector = (state: AppState) => state.tagsList;

const tagsSelector = createSelector(
  tagsListSelector,
  (tagsList) => tagsList.tags,
);

export default tagsSelector;
