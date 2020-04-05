import { takeEvery, put } from 'redux-saga/effects';
import { setRelatedImages } from '../actions/relatedImages';
import { GET_RELATED_IMAGES } from '../../types/actionTypes';

type PayloadType = {
  payload: object[];
};

function* relatedImagesSagasWorker({ payload }: any) {
  try {
    yield put(setRelatedImages(payload));
  } catch (error) {
    console.log(error);
  }
}

export default function* relatedImagesSagasWatcher() {
  yield takeEvery(GET_RELATED_IMAGES, relatedImagesSagasWorker);
}
