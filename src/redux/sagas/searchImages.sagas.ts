import { takeLatest, put, call, select } from 'redux-saga/effects';
import { imagesFailed, imagesRequested } from '../actions/fetchImages';
import { searchImagesLoaded } from '../actions/searchImages';
import pageSelector from '../selectors/pages-selectors';
import { termSelector } from '../selectors/images-selectors';
import { SEARCH_IMAGES, SET_TERM } from '../../types/actionTypes';

export async function fetchImagesData(page: number, term: string) {
  const url = `https://api.unsplash.com/search/?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4&page=${page}&per_page=10&query=${term}`;
  const req = await fetch(url);
  const data = await req.json();
  return data.photos.results;
}

export function* searchImagesSagaWorker() {
  yield put(imagesRequested());
  try {
    const page = yield select(pageSelector);
    const term = yield select(termSelector);
    const data = yield call(fetchImagesData, page, term);
    yield put(searchImagesLoaded(data));
  } catch (error) {
    yield put(imagesFailed(error));
  }
}

export default function* searchImagesSagaWatcher() {
  yield takeLatest([SEARCH_IMAGES, SET_TERM], searchImagesSagaWorker);
}
