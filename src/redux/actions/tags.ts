const setTags = (tags: any) => {
  return {
    type: 'SET_TAGS',
    payload: tags,
  };
};

const getTags = (id: any) => {
  return {
    type: 'GET_TAGS',
    payload: id,
  };
};

export { setTags, getTags };
