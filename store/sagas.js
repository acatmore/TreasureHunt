import { all } from 'redux-saga/effects';
import itemsSaga from './map/sagas';
import treasureSaga from './marker/sagas';
import alertSaga from './alert/sagas';

export default function* rootSaga() {
  yield all([itemsSaga(), treasureSaga(), alertSaga()]);
}
