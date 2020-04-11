import relatedImagesSelector from '../relatedImages-selectors';

describe('Related Images Selectors', () => {
  describe('relatedImages-selector', () => {
    it('should return relatedImages', () => {
      const mockParameters = {
        relatedList: {
          relatedImages: [
            { id: '1', url: 'image1.png' },
            { id: '2', url: 'image2.png' },
            { id: '3', url: 'image3.png' },
            { id: '4', url: 'image4.png' },
          ],
        },
      };
      const selected = relatedImagesSelector.resultFunc(
        mockParameters.relatedList,
      );
      expect(selected).toEqual([
        { id: '1', url: 'image1.png' },
        { id: '2', url: 'image2.png' },
        { id: '3', url: 'image3.png' },
        { id: '4', url: 'image4.png' },
      ]);
    });
  });
});
