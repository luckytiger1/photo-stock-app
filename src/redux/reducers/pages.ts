import { ADVANCE_PAGE, RESET_PAGE, AppActions } from '../../types/actionTypes';

const INITIAL_STATE = {
  page: 1,
};

const pageReducer = (state = INITIAL_STATE, action: AppActions) => {
  switch (action.type) {
    case ADVANCE_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET_PAGE:
      return {
        ...state,
        page: 1,
      };
    default:
      return state;
  }
};

export default pageReducer;
