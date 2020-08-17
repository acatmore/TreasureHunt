/* eslint-disable prettier/prettier */
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  CHECK_TREASURE,
  CHECK_TREASURE_SUCCESS,
  CHECK_TREASURE_ERROR,
} from './markerActionTypes';
import treasureApi from '../../server/mockApi';

export const checkTreasure = (itemId) => {
  return { type: CHECK_TREASURE, itemId };
};

export function* checkAllTreasure(action) {
  const { itemId } = action;
  const api = treasureApi;
  if (!api) { return; }
  try {
    const treasure = yield call(api.siteHasTreasure, itemId);
    yield put({ type: CHECK_TREASURE_SUCCESS, treasure, itemId });
  } catch (e) {
    console.log(e.message)
    yield put({ type: CHECK_TREASURE_ERROR, error: e.message });
  }
}

function* treasureSaga() {
  yield takeLatest(CHECK_TREASURE, checkAllTreasure);
}

export default treasureSaga;