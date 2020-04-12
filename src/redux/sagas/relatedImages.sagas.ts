import { takeEvery, put } from 'redux-saga/effects';
import { setRelatedImages } from '../actions/relatedImages';
import { GET_RELATED_IMAGES } from '../../types/actionTypes';

type PayloadType = {
  payload: object[];
};

export function* relatedImagesSagasWorker({ payload }: any) {
  yield put(setRelatedImages(payload));
}

export default function* relatedImagesSagasWatcher() {
  yield takeEvery(GET_RELATED_IMAGES, relatedImagesSagasWorker);
}
