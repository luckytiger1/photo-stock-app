import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
  imagesRequested,
  imagesLoaded,
  imagesFailed,
} from '../actions/fetchImages';
import pageSelector from '../selectors/pages-selectors';
import { FETCH_IMAGES } from '../../types/actionTypes';

export async function fetchImagesData(page: number) {
  const url = `https://api.unsplash.com/photos/?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4&page=${page}&per_page=10`;
  const req = await fetch(url);
  const data = await req.json();
  return data;
}

export function* imagesSagaWorker() {
  yield put(imagesRequested());
  try {
    const page = yield select(pageSelector);
    const data = yield call(fetchImagesData, page);
    yield put(imagesLoaded(data));
  } catch (error) {
    yield put(imagesFailed(error));
  }
}

export default function* imagesSagaWatcher() {
  yield takeEvery(FETCH_IMAGES, imagesSagaWorker);
}
