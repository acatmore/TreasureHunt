import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import treasureApi from '../../server/mockApi';

export function* fetchAllItems() {
  const api = treasureApi;
  if (!api) {
    return;
  }
  try {
    const items = yield call(api.getTreasureSites);
    yield put(actions.fetchItemsSuccess(items));
  } catch (e) {
    yield put(actions.fetchItemsError(e.message));
  }
}

function* itemsSaga() {
  yield takeLatest(actions.FETCH_ITEMS, fetchAllItems);
}

export default itemsSaga;
