const imagesRequested = () => {
  return {
    type: 'FETCH_IMAGES_REQUEST',
  };
};

const imagesLoaded = (newImages: any) => {
  return {
    type: 'FETCH_IMAGES_SUCCESS',
    payload: newImages,
  };
};

const imagesFailed = (error: any) => {
  return {
    type: 'FETCH_IMAGES_FAILURE',
    payload: error,
  };
};

const setTerm = (term: any) => {
  return {
    type: 'SET_TERM',
    payload: term,
  };
};

const addToFavorites = (image: any) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: image,
  };
};

const mainPageUnloaded = () => {
  return {
    type: 'MAIN_PAGE_UNLOADED',
  };
};

const fetchImages = () => {
  return {
    type: 'FETCH_IMAGES',
  };
};

export {
  imagesRequested,
  imagesLoaded,
  imagesFailed,
  fetchImages,
  setTerm,
  addToFavorites,
  mainPageUnloaded,
};
