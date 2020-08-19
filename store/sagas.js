/* eslint-disable prettier/prettier */
import { all } from 'redux-saga/effects';
import itemsSaga from '../components/map/mapActions';
import treasureSaga from '../components/map/markerActions';
import alertSaga from '../components/alert/alertActions';

export default function* rootSaga() {
  yield all([itemsSaga(), treasureSaga(), alertSaga()]);
}
