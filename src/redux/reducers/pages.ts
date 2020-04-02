const INITIAL_STATE = {
  page: 1,
};

const pageReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'ADVANCE_PAGE':
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};

export default pageReducer;
