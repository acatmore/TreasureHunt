export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';

export const fetchItems = () => ({ type: FETCH_ITEMS });

export const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  items,
});

export const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_ERROR,
  error: error,
});
