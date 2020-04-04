import { takeEvery, put, call } from 'redux-saga/effects';
import _ from 'lodash';
import { setTags } from '../actions/tags';
import { getRelatedImages } from '../actions/relatedImages';

async function fetchTags(id: any) {
  const url = `https://api.unsplash.com/photos/${id}/?client_id=i_zzFN2ObiV515beVlFT2zSqgPNUnS2nL9UZD9SqHj4`;
  const req = await fetch(url);
  const data = await req.json();

  // console.log(_.flatten(arr));
  console.log(data);

  // console.log(data);

  return data;
}

function* tagsSagaWorker({ payload }: any) {
  const arr: any = [];

  try {
    const data = yield call(fetchTags, payload);
    data.related_collections.results.forEach((el: any) =>
      arr.push(el.preview_photos),
    );
    yield put(getRelatedImages(_.flatten(arr)));
    yield put(setTags(data.tags));
  } catch (error) {
    console.log(error);
  }
}

export default function* tagsSagaWatcher() {
  yield takeEvery('GET_TAGS', tagsSagaWorker);
}
