import { takeEvery, put, call } from 'redux-saga/effects';
import _ from 'lodash';
import { setTags } from '../actions/tags';
import { getRelatedImages } from '../actions/relatedImages';
import { GET_TAGS } from '../../types/actionTypes';
import { imagesFailed } from '../actions/fetchImages';

export async function fetchTags(id: string) {
  const url = `https://api.unsplash.com/photos/${id}/?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4`;
  const req = await fetch(url);
  const data = await req.json();
  return data;
}
export function makeCollection(data: any) {
  const arr: Array<object> | undefined = [];

  data.related_collections.results.forEach((el: any) =>
    arr.push(el.preview_photos),
  );
  return _.flatten(arr);
}

export function* tagsSagaWorker({ payload }: any) {
  try {
    const data = yield call(fetchTags, payload);
    const collection = yield call(makeCollection, data);
    yield put(getRelatedImages(collection));
    yield put(setTags(data.tags));
  } catch (error) {
    yield put(imagesFailed(error));
  }
}

export default function* tagsSagaWatcher() {
  yield takeEvery(GET_TAGS, tagsSagaWorker);
}
