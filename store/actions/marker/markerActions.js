import { call, delay, debounce, put } from 'redux-saga/effects';
import {
  CHECK_TREASURE,
  TREASURE_DATA_EXISTS,
  FETCH_TREASURE_SUCCESS,
  FETCH_TREASURE_ERROR,
} from './markerActionTypes';
import { SEND_ALERT } from '../alert/alertActionTypes';
import treasureApi from '../../../server/mockApi';

export const checkTreasure = (item) => {
  return { type: CHECK_TREASURE, item };
};

export function* checkAllTreasure(action) {
  const { item } = action;
  const api = treasureApi;
  if (!api) {
    return;
  }
  if (!('treasure' in item)) {
    try {
      const treasure = yield call(api.siteHasTreasure, item.id);
      yield put({ type: FETCH_TREASURE_SUCCESS, treasure, item });
      yield put({ type: SEND_ALERT, treasure });
    } catch (e) {
      console.log(e.message);
      yield put({ type: FETCH_TREASURE_ERROR, error: e.message });
    }
  }
  if ('treasure' in item) {
    const { treasure } = item;
    yield put({ type: TREASURE_DATA_EXISTS });
    yield put({ type: SEND_ALERT, treasure });
  }
}

function* treasureSaga() {
  yield debounce(1000, CHECK_TREASURE, checkAllTreasure);
}

export default treasureSaga;
