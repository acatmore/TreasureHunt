/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import mapReducer from '../components/map/mapReducer';

const reducers = combineReducers({
  items: mapReducer,
});

export default reducers;