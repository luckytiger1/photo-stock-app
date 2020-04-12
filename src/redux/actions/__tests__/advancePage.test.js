import { advancePage, resetPage } from '../advancePage';
import { ADVANCE_PAGE, RESET_PAGE } from '../../../types/actionTypes';

describe('Page actions', () => {
  describe('advancePage action', () => {
    it('should create an action for advance page', () => {
      const expectedAction = {
        type: ADVANCE_PAGE,
      };
      expect(advancePage()).toEqual(expectedAction);
    });
  });
  describe('resetPage action', () => {
    it('should create an action for reset page', () => {
      const expectedAction = {
        type: RESET_PAGE,
      };
      expect(resetPage()).toEqual(expectedAction);
    });
  });
});
