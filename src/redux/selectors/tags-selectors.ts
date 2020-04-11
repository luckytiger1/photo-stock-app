import { createSelector } from 'reselect';

const tagsListSelector = (state: any) => state.tagsList;

const tagsSelector = createSelector(
  tagsListSelector,
  (tagsList) => tagsList.tags,
);

export default tagsSelector;
