import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
  imagesRequested,
  imagesLoaded,
  imagesFailed,
} from '../actions/fetchImages';
import pageSelector from '../../selectors/pages-selectors';

async function fetchImagesData(page: any) {
  const url = `https://api.unsplash.com/photos/?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4&page=${page}&per_page=30`;
  const req = await fetch(url);
  const data = await req.json();
  return data;
}

function* imagesSagaWorker() {
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
  yield takeEvery('FETCH_IMAGES', imagesSagaWorker);
}
