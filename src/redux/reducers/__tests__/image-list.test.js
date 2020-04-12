import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  SET_TERM,
} from '../../../types/actionTypes';
import updateImageList from '../image-list';

describe('imageList reducer', () => {
  const mockData1 = [
    { id: '1', url: 'image1.png' },
    { id: '2', url: 'image2.png' },
    { id: '3', url: 'image3.png' },
  ];
  const mockData2 = [
    { id: '1', url: 'image1.png' },
    { id: '1', url: 'image1.png' },
    { id: '3', url: 'image3.png' },
  ];
  const initialStateImageList = {
    images: [],
    loading: true,
    error: null,
    searchResults: [],
    term: '',
    searchHistory: [],
  };
  const imageListReducer = updateImageList;
  it('should return the initial state', () => {
    expect(imageListReducer(undefined, {})).toEqual(initialStateImageList);
  });
  it('should handle FETCH_IMAGES_REQUEST', () => {
    expect(
      imageListReducer(initialStateImageList, { type: FETCH_IMAGES_REQUEST }),
    ).toEqual({
      ...initialStateImageList,
      error: null,
      loading: true,
    });
  });
  it('should handle FETCH_IMAGES_SUCCESS', () => {
    expect(
      imageListReducer(initialStateImageList, {
        type: FETCH_IMAGES_SUCCESS,
        payload: mockData1,
      }),
    ).toEqual({
      ...initialStateImageList,
      error: null,
      loading: false,
      images: mockData1,
    });
    expect(
      imageListReducer(initialStateImageList, {
        type: FETCH_IMAGES_SUCCESS,
        payload: mockData2,
      }),
    ).toEqual({
      ...initialStateImageList,
      error: null,
      loading: false,
      images: [
        { id: '1', url: 'image1.png' },
        { id: '3', url: 'image3.png' },
      ],
    });
  });
  it('should handle SEARCH_IMAGES_SUCCESS', () => {
    expect(
      imageListReducer(initialStateImageList, {
        type: SEARCH_IMAGES_SUCCESS,
        payload: mockData1,
      }),
    ).toEqual({
      ...initialStateImageList,
      error: null,
      loading: false,
      searchResults: mockData1,
    });
    expect(
      imageListReducer(
        {
          ...initialStateImageList,
          searchResults: [
            { id: '3', url: 'image3.png' },
            { id: '4', url: 'image4.png' },
          ],
        },
        {
          type: SEARCH_IMAGES_SUCCESS,
          payload: mockData1,
        },
      ),
    ).toEqual({
      ...initialStateImageList,
      error: null,
      loading: false,
      searchResults: [
        { id: '3', url: 'image3.png' },
        { id: '4', url: 'image4.png' },
        { id: '1', url: 'image1.png' },
        { id: '2', url: 'image2.png' },
      ],
    });
  });
  it('should handle FETCH_IMAGES_FAILURE', () => {
    expect(
      imageListReducer(initialStateImageList, {
        type: FETCH_IMAGES_FAILURE,
        payload: 'image not found',
      }),
    ).toEqual({
      ...initialStateImageList,
      error: 'image not found',
      loading: false,
    });
  });
  it('should handle SET_TERM', () => {
    expect(
      imageListReducer(initialStateImageList, {
        type: SET_TERM,
        payload: 'astana',
      }),
    ).toEqual({
      ...initialStateImageList,
      loading: true,
      term: 'astana',
      searchResults: [],
      searchHistory: ['Astana'],
    });
  });
});
