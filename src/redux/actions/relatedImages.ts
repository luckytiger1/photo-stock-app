const setRelatedImages = (images: any) => {
  return {
    type: 'SET_RELATED_IMAGES',
    payload: images,
  };
};

const getRelatedImages = (id: any) => {
  return {
    type: 'GET_RELATED_IMAGES',
    payload: id,
  };
};

export { setRelatedImages, getRelatedImages };
