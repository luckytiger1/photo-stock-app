import { takeLatest, put, call, select } from 'redux-saga/effects';
import { imagesFailed } from '../actions/fetchImages';
import {
  searchImagesRequest,
  searchImagesLoaded,
} from '../actions/searchImages';
import pageSelector from '../selectors/pages-selectors';
import { termSelector } from '../selectors/images-selectors';

async function fetchImagesData(page: any, term: any) {
  const url = `https://api.unsplash.com/search/?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4&page=${page}&per_page=10&query=${term}`;
  const req = await fetch(url);
  const data = await req.json();
  return data.photos.results;
}

function* searchImagesSagaWorker() {
  yield put(searchImagesRequest());
  try {
    const page = yield select(pageSelector);
    const term = yield select(termSelector);
    console.log(page);
    console.log(term);

    const data = yield call(fetchImagesData, page, term);
    yield put(searchImagesLoaded(data));
  } catch (error) {
    yield put(imagesFailed(error));
  }
}

export default function* searchImagesSagaWatcher() {
  yield takeLatest(['SEARCH_IMAGES'], searchImagesSagaWorker);
}
