import {
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES,
} from '../../../types/actionTypes';
import { searchImagesLoaded, searchImages } from '../searchImages';

describe('SearchImages actions', () => {
  describe('searchImagesLoaded action', () => {
    it('should create an action for loaded search images', () => {
      const mockImages = [
        { id: '1', url: 'image1.png' },
        { id: '2', url: 'image2.png' },
        { id: '3', url: 'image3.png' },
      ];
      const expectedAction = {
        type: SEARCH_IMAGES_SUCCESS,
        payload: mockImages,
      };
      expect(searchImagesLoaded(mockImages)).toEqual(expectedAction);
    });
  });
  describe('searchImages action', () => {
    it('should create an action for searching images', () => {
      const expectedAction = {
        type: SEARCH_IMAGES,
      };
      expect(searchImages()).toEqual(expectedAction);
    });
  });
});
