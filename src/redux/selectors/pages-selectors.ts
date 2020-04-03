import { createSelector } from 'reselect';

const pagesSelector = (state: any) => state.pages;

const pageSelector = createSelector([pagesSelector], (pages) => pages.page);

export default pageSelector;
