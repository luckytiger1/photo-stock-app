import { createSelector } from 'reselect';
import { AppState } from '../reducers/types/types';

const pagesSelector = (state: AppState) => state.pages;

const pageSelector = createSelector([pagesSelector], (pages) => pages.page);

export default pageSelector;
