import * as MapActionTypes from './actions/map/mapActionTypes';
import * as MarkerActionTypes from './actions/marker/markerActionTypes';

const initState = {
  items: [],
  isFetching: false,
  isChecking: false,
  error: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MapActionTypes.FETCH_ITEMS:
      return { ...state, isFetching: true };
    case MapActionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...action.items],
      };
    case MapActionTypes.FETCH_ITEMS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case MarkerActionTypes.CHECK_TREASURE:
      return {
        ...state,
        isChecking: true,
      };
    case MarkerActionTypes.FETCH_TREASURE_SUCCESS: {
      const newItems = state.items.map((item) => {
        if (item.id !== action.item.id) {
          return item;
        }
        return {
          ...item,
          treasure: action.treasure,
        };
      });
      return {
        ...state,
        isChecking: false,
        items: newItems,
      };
    }
    case MarkerActionTypes.FETCH_TREASURE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
