/* eslint-disable prettier/prettier */
import { all } from 'redux-saga/effects';
import itemsSaga from '../components/map/mapActions';
import treasureSaga from '../components/map/markerActions';

export default function* rootSaga() {
  yield all([...itemsSaga(), ...treasureSaga()]);
}
