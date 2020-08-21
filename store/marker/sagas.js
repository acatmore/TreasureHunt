import { call, debounce, put } from 'redux-saga/effects';
import * as actions from './actions';
import * as alertActions from '../alert/actions';
import treasureApi from '../../server/mockApi';

export function* checkAllTreasure(action) {
  const { item } = action;
  const api = treasureApi;
  if (!api) {
    return;
  }
  if (!('treasure' in item)) {
    try {
      const treasure = yield call(api.siteHasTreasure, item.id);
      const message = treasure ? 'You found a treasure!' : 'No treasure found.';
      yield put(actions.fetchTreasureSuccess(item, treasure));
      yield put(alertActions.sendAlert(treasure, message));
    } catch (e) {
      yield put(actions.fetchTreasureError(e));
    }
  } else {
    const { treasure } = item;
    const message = treasure ? 'You found a treasure!' : 'No treasure found.';
    yield put(actions.treasureExists);
    yield put(alertActions.sendAlert(treasure, message));
  }
}

function* treasureSaga() {
  yield debounce(1000, actions.CHECK_TREASURE, checkAllTreasure);
}

export default treasureSaga;
