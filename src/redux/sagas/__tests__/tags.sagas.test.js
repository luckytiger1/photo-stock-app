import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import { tagsSagaWorker, fetchTags, makeCollection } from '../tags.sagas';
import { getRelatedImages } from '../../actions/relatedImages';
import { setTags } from '../../actions/tags';
import { imagesFailed } from '../../actions/fetchImages';

describe('with redux-saga-testing', () => {
  const mockData = {
    payload: 'hsd3jS',
  };
  const mockCollection = {
    related_collections: [
      { preview_photos: ['image1.png,image2.png,image3.png'] },
      { preview_photos: ['image1.png,image2.png,image3.png'] },
      { preview_photos: ['image1.png,image2.png,image3.png'] },
    ],
    tags: ['Astana', 'Almaty', 'Atyrau'],
  };
  const it = sagaHelper(tagsSagaWorker(mockData));

  it('should have called the mock API first, which we are going to specify the results of', (result) => {
    expect(result).toEqual(call(fetchTags, 'hsd3jS'));
    return mockCollection;
  });
  it('should have called function which creates collection array', (result) => {
    expect(result).toEqual(call(makeCollection, mockCollection));
    return [
      'image1.png,image2.png,image3.png',
      'image1.png,image2.png,image3.png',
      'image1.png,image2.png,image3.png',
    ];
  });
  it('and then trigger an action with the related images we got from the API', (result) => {
    expect(result).toEqual(
      put(
        getRelatedImages([
          'image1.png,image2.png,image3.png',
          'image1.png,image2.png,image3.png',
          'image1.png,image2.png,image3.png',
        ]),
      ),
    );
  });
  it('and then trigger an action with the related tags we got from the API', (result) => {
    expect(result).toEqual(put(setTags(['Astana', 'Almaty', 'Atyrau'])));
  });
});

describe('Scenario 2: The API is broken and throws an exception', () => {
  const mockData = {
    payload: 'hsd3jS',
  };

  const it = sagaHelper(tagsSagaWorker(mockData));

  it('should have called the mock API first, which we are going to specify the results of', (result) => {
    expect(result).toEqual(call(fetchTags, 'hsd3jS'));
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
