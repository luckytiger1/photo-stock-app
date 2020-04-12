import {
  termSelector,
  imageIsLoadingSelector,
  favoritesSelector,
  imagesSelector,
  searchResultsSelector,
  imagePageSelector,
} from '../images-selectors';

describe('Images Selectors', () => {
  const mockParameters = {
    imageList: {
      term: 'Astana',
      loading: true,
      images: [
        { id: '1', url: 'image1.png' },
        { id: '2', url: 'image2.png' },
        { id: '3', url: 'image3.png' },
      ],
      searchResults: [{ id: '1', url: 'image1.png' }],
    },
    favoritesList: {
      favorites: [
        { id: '1', url: 'image1.png' },
        { id: '2', url: 'image2.png' },
        { id: '3', url: 'image3.png' },
      ],
    },
  };
  describe('imagesSelector', () => {
    it('should return images', () => {
      const selected = imagesSelector.resultFunc(mockParameters.imageList);
      expect(selected).toEqual([
        { id: '1', url: 'image1.png' },
        { id: '2', url: 'image2.png' },
        { id: '3', url: 'image3.png' },
      ]);
    });
  });
  describe('searchResults', () => {
    it('should return search results', () => {
      const selected = searchResultsSelector.resultFunc(
        mockParameters.imageList,
      );
      expect(selected).toEqual([{ id: '1', url: 'image1.png' }]);
    });
  });
  describe('termSelector', () => {
    it('should return term', () => {
      const selected = termSelector.resultFunc(mockParameters.imageList);
      expect(selected).toEqual('Astana');
    });
  });
  describe('imageIsLoadingSelector', () => {
    it('should return loading boolean', () => {
      const selected = imageIsLoadingSelector.resultFunc(
        mockParameters.imageList,
      );
      expect(selected).toEqual(true);
    });
  });
  describe('favoritesSelector', () => {
    it('should return favorites', () => {
      const selected = favoritesSelector.resultFunc(
        mockParameters.favoritesList,
      );
      expect(selected).toEqual([
        { id: '1', url: 'image1.png' },
        { id: '2', url: 'image2.png' },
        { id: '3', url: 'image3.png' },
      ]);
    });
  });
  describe('imagePageSelector', () => {
    it('should return image by id', () => {
      const selected = imagePageSelector('1').resultFunc(
        mockParameters.imageList.images,
        mockParameters.imageList.searchResults,
      );
      expect(selected).toEqual({ id: '1', url: 'image1.png' });
    });
  });
});
