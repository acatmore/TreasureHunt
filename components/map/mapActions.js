/* eslint-disable prettier/prettier */
import * as ActionTypes from './mapActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';

export const fetchItems = (coordinateAPI) => {
  return {
    type: ActionTypes.FETCH_ITEMS,
    coordinateAPI,
  }
};

function* fetchAllItems(action) {
  const coordinates = action.coordinateAPI;
  // if (!coordinates) { return; }
  // const response = yield call(fetch, coordinates);
  yield put({
    type: ActionTypes.LOAD_ITEMS,
    items: coordinates,
  });
}

function* itemsSaga() {
  yield takeLatest(ActionTypes.FETCH_ITEMS, fetchAllItems);
}

export default itemsSaga;