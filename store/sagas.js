/* eslint-disable prettier/prettier */
import { all } from 'redux-saga/effects';
import itemsSaga from '../components/map/mapActions';

export default function* rootSaga() {
  yield all([...itemsSaga()]);
}
