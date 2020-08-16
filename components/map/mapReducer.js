/* eslint-disable prettier/prettier */
import * as ActionTypes from './mapActionTypes';

const initState = {
  items: [],
  isFetching: false,
};

const mapReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ITEMS:
      return { ...state, isFetching: true };
    case ActionTypes.LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...action.items],
      };
    default:
      return state;
  }
};

export default mapReducer;
