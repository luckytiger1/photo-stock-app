import {
  SET_RELATED_IMAGES,
  GET_RELATED_IMAGES,
} from '../../../types/actionTypes';
import { setRelatedImages, getRelatedImages } from '../relatedImages';

describe('Related Images actions', () => {
  const mockImages = [
    { id: '1', url: 'image1.png' },
    { id: '2', url: 'image2.png' },
    { id: '3', url: 'image3.png' },
  ];
  describe('setRelatedImages action', () => {
    it('should create an action for setting related images', () => {
      const expectedAction = {
        type: SET_RELATED_IMAGES,
        payload: mockImages,
      };
      expect(setRelatedImages(mockImages)).toEqual(expectedAction);
    });
  });
  describe('getRelatedImages action', () => {
    it('should create an action for getting related images', () => {
      const expectedAction = {
        type: GET_RELATED_IMAGES,
        payload: mockImages,
      };
      expect(getRelatedImages(mockImages)).toEqual(expectedAction);
    });
  });
});
