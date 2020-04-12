import { createStore } from 'redux';
import rootReducer from '../reducers';
import { ADVANCE_PAGE } from '../../../types/actionTypes';

const store = createStore(rootReducer);

describe('rootReducer', () => {
  const action = { type: ADVANCE_PAGE };
  it('should initialize correctly', () => {
    expect(store.getState()).toMatchSnapshot();
    store.dispatch(action);
    expect(store.getState().pages).toEqual({ page: 2 });
  });
});
