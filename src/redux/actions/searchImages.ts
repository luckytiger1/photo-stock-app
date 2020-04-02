const searchImagesRequest = () => {
  return {
    type: 'SEARCH_IMAGES_REQUEST',
  };
};

const searchImagesLoaded = (newImages: any) => {
  return {
    type: 'SEARCH_IMAGES_SUCCESS',
    payload: newImages,
  };
};

const searchImages = () => {
  return {
    type: 'SEARCH_IMAGES',
  };
};

export { searchImagesRequest, searchImagesLoaded, searchImages };
