import { call, all } from 'redux-saga/effects';
import imagesSagaWatcher from './images.sagas';
import searchImagesSagaWatcher from './searchImages.sagas';
import tagsSagaWatcher from './tags.sagas';
import relatedImagesSagasWatcher from './relatedImages.sagas';

export default function* rootSaga() {
  yield all([
    call(imagesSagaWatcher),
    call(searchImagesSagaWatcher),
    call(tagsSagaWatcher),
    call(relatedImagesSagasWatcher),
  ]);
}
