import { ADVANCE_PAGE, RESET_PAGE, AppActions } from '../../types/actionTypes';

const advancePage = (): AppActions => {
  return {
    type: ADVANCE_PAGE,
  };
};
const resetPage = (): AppActions => {
  return {
    type: RESET_PAGE,
  };
};

export { advancePage, resetPage };
