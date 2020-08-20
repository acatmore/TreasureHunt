import { call, takeLatest } from 'redux-saga/effects';
import createAlert from '../../../components/alert';
import { SEND_ALERT } from './alertActionTypes';

export const sendAlert = (item) => {
  return { type: SEND_ALERT, item };
};

export function* sendAllAlerts(action) {
  const { treasure } = action;
  createAlert(treasure);
}

function* alertSaga() {
  yield takeLatest(SEND_ALERT, sendAllAlerts);
}

export default alertSaga;
