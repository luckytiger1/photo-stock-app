import { SET_TAGS, GET_TAGS, AppActions } from '../../types/actionTypes';

const setTags = (tags: string[]): AppActions => {
  return {
    type: SET_TAGS,
    payload: tags,
  };
};

const getTags = (id: string) => {
  return {
    type: GET_TAGS,
    payload: id,
  };
};

export { setTags, getTags };
