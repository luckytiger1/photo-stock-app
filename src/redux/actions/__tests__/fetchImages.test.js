import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES,
  SET_TERM,
} from '../../../types/actionTypes';
import {
  imagesRequested,
  imagesLoaded,
  imagesFailed,
  fetchImages,
  setTerm,
} from '../fetchImages';

describe('Fetch images actions', () => {
  const mockImages = [
    { id: '1', url: 'image1.png' },
    { id: '2', url: 'image2.png' },
    { id: '3', url: 'image3.png' },
  ];
  describe('imagesRequested action', () => {
    it('should create an action for requesting images', () => {
      const expectedAction = {
        type: FETCH_IMAGES_REQUEST,
      };
      expect(imagesRequested()).toEqual(expectedAction);
    });
  });
  describe('imagesLoaded action', () => {
    it('should create an action for loading images', () => {
      const expectedAction = {
        type: FETCH_IMAGES_SUCCESS,
        payload: mockImages,
      };
      expect(imagesLoaded(mockImages)).toEqual(expectedAction);
    });
  });
  describe('imagesFailed action', () => {
    it('should create an action for failed images', () => {
      const mockError = new Error('fetch error');
      const expectedAction = {
        type: FETCH_IMAGES_FAILURE,
        payload: mockError,
      };
      expect(imagesFailed(mockError)).toEqual(expectedAction);
    });
  });
  describe('fetchImages action', () => {
    it('should create an action for fetching images with sagas', () => {
      const expectedAction = {
        type: FETCH_IMAGES,
      };
      expect(fetchImages()).toEqual(expectedAction);
    });
  });
  describe('setTerm action', () => {
    it('should create an action for setting terms', () => {
      const mockTerm = 'Wallpaper';
      const expectedAction = {
        type: SET_TERM,
        payload: mockTerm,
      };
      expect(setTerm(mockTerm)).toEqual(expectedAction);
    });
  });
});
