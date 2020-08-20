import { all } from 'redux-saga/effects';
import itemsSaga from './actions/map/mapActions';
import treasureSaga from './actions/marker/markerActions';
import alertSaga from './actions/alert/alertActions';

export default function* rootSaga() {
  yield all([itemsSaga(), treasureSaga(), alertSaga()]);
}
