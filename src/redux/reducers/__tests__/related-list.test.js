import { SET_TAGS } from '../../../types/actionTypes';

import tagsReducer from '../tags-reducer';

describe('tags reducer', () => {
  const initialStateFavorites = {
    tags: [],
  };
  it('should return the initial state', () => {
    expect(tagsReducer(undefined, {})).toEqual({ tags: [] });
  });
  it('should handle SET_TAGS', () => {
    expect(
      tagsReducer(initialStateFavorites, {
        type: SET_TAGS,
        payload: ['Astana', 'Almaty', 'Atyrau'],
      }),
    ).toEqual({
      ...initialStateFavorites,
      tags: ['Astana', 'Almaty', 'Atyrau'],
    });
  });
});
