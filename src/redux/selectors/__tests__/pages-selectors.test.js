import pageSelector from '../pages-selectors';

describe('Page Selectors', () => {
  describe('pageSelector', () => {
    it('should return page', () => {
      const mockParameters = {
        pages: {
          page: 2,
        },
      };
      const selected = pageSelector.resultFunc(mockParameters.pages);
      expect(selected).toEqual(2);
    });
  });
});
