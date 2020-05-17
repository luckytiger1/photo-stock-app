import sagaHelper from 'redux-saga-testing';
import { put } from 'redux-saga/effects';
import { relatedImagesSagasWorker } from '../relatedImages.sagas';
import { setRelatedImages } from '../../actions/relatedImages';

describe('with redux-saga-testing', () => {
  const mockCollection = {
    payload: [
      { id: '1', url: 'image1.png' },
      { id: '2', url: 'image2.png' },
      { id: '3', url: 'image3.png' },
    ],
  };

  const it = sagaHelper(relatedImagesSagasWorker(mockCollection));
  it('trigger an action to start request', (result) => {
    expect(result).toEqual(put(setRelatedImages(mockCollection.payload)));
  });
});
