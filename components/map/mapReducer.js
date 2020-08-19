/* eslint-disable prettier/prettier */
import * as MapActionTypes from './mapActionTypes';
import * as MarkerActionTypes from './markerActionTypes';

const initState = {
  items: [],
  isFetching: false,
};

const mapReducer = (state = initState, action) => {
  switch (action.type) {
    case MapActionTypes.FETCH_ITEMS:
      return { ...state, isFetching: true };
    case MapActionTypes.LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...action.items],
      };
    case MarkerActionTypes.CHECK_TREASURE: return {
      ...state, isFetching: true,
    }
    case MarkerActionTypes.FETCH_TREASURE_SUCCESS: {
      const newItems = state.items.map(item => {
        if (item.id !== action.item.id) {
          return item;
        }
        return {
          ...item,
          treasure: action.treasure,
        }
      });

      return {
        ...state, isFetching: false,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

export default mapReducer;
