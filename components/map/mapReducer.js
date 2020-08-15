/* eslint-disable prettier/prettier */
import * as ActionTypes from './mapActionTypes';
// import treasureApi from '../server/mockApi';

const initState = {
  count: 0,
  items: [],
  isFetching: false,
};
// coordinates: treasureApi.getTreasureSites(),
// coordinates: action.coordinates,
const mapReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ITEMS:
      return { ...state, isFetching: true };
    case ActionTypes.LOAD_ITEMS:
      // let count = state.count + action.count;
      return {
        ...state,
        isFetching: false,
        items: [...state.items, ...action.items],
        // count: count,
      };
    default:
      return state;
  }
};

export default mapReducer;
