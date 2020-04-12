import { SET_TAGS, GET_TAGS } from '../../../types/actionTypes';
import { setTags, getTags } from '../tags';

describe('Tags actions', () => {
  describe('setTags action', () => {
    it('should create an action for set tags', () => {
      const mockTags = ['Astana', 'Almaty', 'London'];
      const expectedAction = {
        type: SET_TAGS,
        payload: mockTags,
      };
      expect(setTags(mockTags)).toEqual(expectedAction);
    });
  });
  describe('getTags action', () => {
    it('should create an action for get tags', () => {
      const mockId = 'jkn3a';
      const expectedAction = {
        type: GET_TAGS,
        payload: mockId,
      };
      expect(getTags(mockId)).toEqual(expectedAction);
    });
  });
});
