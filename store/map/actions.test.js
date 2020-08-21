import * as actions from './actions';

test('fetchItems action creator', () => {
  expect(actions.fetchItems()).toEqual(
    expect.objectContaining({
      type: actions.FETCH_ITEMS,
    }),
  );
});

test('fetchItemsSuccess action creator', () => {
  expect(
    actions.fetchItemsSuccess([{ id: 1, latitude: 2, longitude: 3 }]),
  ).toEqual(
    expect.objectContaining({
      type: actions.FETCH_ITEMS_SUCCESS,
      items: [{ id: 1, latitude: 2, longitude: 3 }],
    }),
  );
});

test('fetchItemsError action creator', () => {
  expect(actions.fetchItemsError('error')).toEqual(
    expect.objectContaining({
      type: actions.FETCH_ITEMS_ERROR,
      error: 'error',
    }),
  );
});
