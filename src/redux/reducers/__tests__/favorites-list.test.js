import { ADD_TO_FAVORITES } from '../../../types/actionTypes';

import favoritesListReducer from '../favorites-list';

describe('favorites reducer', () => {
  const mockData1 = [
    { id: '1', url: 'image1.png' },
    { id: '2', url: 'image2.png' },
    { id: '3', url: 'image3.png' },
  ];

  const initialStateFavorites = {
    favorites: [],
  };
  it('should return the initial state', () => {
    expect(favoritesListReducer(undefined, {})).toEqual({ favorites: [] });
  });
  it('should handle ADD_TO_FAVORITES', () => {
    expect(
      favoritesListReducer(
        { favorites: mockData1 },
        {
          type: ADD_TO_FAVORITES,
          payload: { id: '5', url: 'image5.png' },
        },
      ),
    ).toEqual({
      ...initialStateFavorites,
      favorites: [...mockData1, { id: '5', url: 'image5.png' }],
    });
    expect(
      favoritesListReducer(
        { favorites: mockData1 },
        {
          type: ADD_TO_FAVORITES,
          payload: { id: '3', url: 'image3.png' },
        },
      ),
    ).toEqual({
      ...initialStateFavorites,
      favorites: [...mockData1],
    });
  });
});
