import { takeLatest } from 'redux-saga/effects';
import createAlert from '../../components/alert';
import * as actions from './actions';

export function* sendAllAlerts(action) {
  const { treasure, message } = action;
  createAlert(treasure, message);
}

function* alertSaga() {
  yield takeLatest(actions.SEND_ALERT, sendAllAlerts);
}

export default alertSaga;
