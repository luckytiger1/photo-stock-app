import { ADVANCE_PAGE, RESET_PAGE } from '../../../types/actionTypes';
import pageReducer from '../pages';

describe('page reducer', () => {
  const initialStatePage = {
    page: 1,
  };
  it('should return the initial state', () => {
    expect(pageReducer(undefined, {})).toEqual({ page: 1 });
  });
  it('should handle ADVANCE_PAGE', () => {
    expect(pageReducer(initialStatePage, { type: ADVANCE_PAGE })).toEqual({
      page: 2,
    });
    expect(pageReducer({ page: 2 }, { type: ADVANCE_PAGE })).toEqual({
      page: 3,
    });
  });
  it('should handle RESET_PAGE', () => {
    expect(pageReducer(initialStatePage, { type: RESET_PAGE })).toEqual({
      page: 1,
    });
    expect(pageReducer({ page: 4 }, { type: RESET_PAGE })).toEqual({
      page: 1,
    });
  });
});
