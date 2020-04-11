import tagsSelector from '../tags-selectors';

describe('Tags Selectors', () => {
  describe('tagsSelector', () => {
    it('should return tags', () => {
      const mockParameters = {
        tagsList: {
          tags: ['a', 'b', 'c'],
        },
      };
      const selected = tagsSelector.resultFunc(mockParameters.tagsList);
      expect(selected).toEqual(['a', 'b', 'c']);
    });
  });
});
