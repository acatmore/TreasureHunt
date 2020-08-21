/* eslint-disable prettier/prettier */
import { FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from './map/actions';
import { CHECK_TREASURE, FETCH_TREASURE_SUCCESS, FETCH_TREASURE_ERROR } from './marker/actions';

const initState = {
  items: [],
  isFetching: false,
  isChecking: false,
  error: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, isFetching: true };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...action.items],
      };

    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case CHECK_TREASURE:
      return {
        ...state,
        isChecking: true,
      };

    case FETCH_TREASURE_SUCCESS: {
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

    case FETCH_TREASURE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
