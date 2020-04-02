import { call, all } from 'redux-saga/effects';
import imagesSagaWatcher from './images.sagas';
import searchImagesSagaWatcher from './searchImages.sagas';

export default function* rootSaga() {
  yield all([call(imagesSagaWatcher), call(searchImagesSagaWatcher)]);
}
