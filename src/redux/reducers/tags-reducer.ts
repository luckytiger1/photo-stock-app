const INITIAL_STATE = {
  tags: [],
};

const tagsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_TAGS':
      return {
        ...state,
        tags: action.payload,
      };

    default:
      return state;
  }
};

export default tagsReducer;
