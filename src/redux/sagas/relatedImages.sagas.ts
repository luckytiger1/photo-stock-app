import { takeEvery, put } from 'redux-saga/effects';
import { setRelatedImages } from '../actions/relatedImages';

function* relatedImagesSagasWorker({ payload }: any) {
  try {
    yield put(setRelatedImages(payload));
    console.log(payload);
  } catch (error) {
    console.log(error);
  }
}

export default function* relatedImagesSagasWatcher() {
  yield takeEvery('GET_RELATED_IMAGES', relatedImagesSagasWorker);
}
// const a = 2;
// export default a;
