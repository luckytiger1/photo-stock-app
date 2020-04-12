import { call, put, select } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import {
  imagesRequested,
  imagesFailed,
  imagesLoaded,
} from '../../actions/fetchImages';
import pageSelector from '../../selectors/pages-selectors';

import { imagesSagaWorker, fetchImagesData } from '../images.sagas';

describe('with redux-saga-testing', () => {
  const mockImages = [
    { id: '1', url: 'image1.png' },
    { id: '2', url: 'image2.png' },
    { id: '3', url: 'image3.png' },
    { id: '4', url: 'image4.png' },
  ];

  const it = sagaHelper(imagesSagaWorker());
  it('trigger an action to start request', (result) => {
    expect(result).toEqual(put(imagesRequested()));
  });
  it('should get the page number from the state', (result) => {
    expect(result).toEqual(select(pageSelector));
    return 3;
  });

  it('should have called the mock API first, which we are going to specify the results of', (result) => {
    expect(result).toEqual(call(fetchImagesData, 3));
    return mockImages;
  });
  it('and then trigger an action with the images we got from the API', (result) => {
    expect(result).toEqual(put(imagesLoaded(mockImages)));
  });
});

describe('Scenario 2: The API is broken and throws an exception', () => {
  const it = sagaHelper(imagesSagaWorker());
  it('trigger an action to start request', (result) => {
    expect(result).toEqual(put(imagesRequested()));
  });
  it('should get the page number from the state', (result) => {
    expect(result).toEqual(select(pageSelector));
    return 2;
  });

  it('should have called the mock API first, which we are going to specify the results of', (result) => {
    expect(result).toEqual(call(fetchImagesData, 2));
    return new Error('Something went wrong');
  });
  it('and then trigger an error action with the error message', (result) => {
    expect(result).toEqual(
      put(imagesFailed(new Error('Something went wrong'))),
    );
  });
  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  });
});
