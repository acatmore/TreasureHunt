/* eslint-disable prettier/prettier */
import * as ActionTypes from './mapActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_ERROR
} from './mapActionTypes';
import treasureApi from '../../server/mockApi';

export const fetchItems = () => {
  return { type: FETCH_ITEMS };
};

export function* fetchALLItems() {
  const api = treasureApi
  if (!api) { return; }
  try {
    const items = yield call(api.getTreasureSites);
    yield put({ type: LOAD_ITEMS_SUCCESS, items });
  } catch (e) {
    console.log(e.message)
    yield put({ type: LOAD_ITEMS_ERROR, error: e.message });
  }
}

function* itemsSaga() {
  yield takeLatest(ActionTypes.FETCH_ITEMS, fetchALLItems);
}

export default itemsSaga;