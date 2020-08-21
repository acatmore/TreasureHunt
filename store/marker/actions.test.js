import * as actions from './actions';

test('checkTreasure action creator', () => {
  expect(actions.checkTreasure({ id: 1, latitude: 2, longitude: 3 })).toEqual(
    expect.objectContaining({
      type: actions.CHECK_TREASURE,
      item: { id: 1, latitude: 2, longitude: 3 },
    }),
  );
});

test('fetchTreasureSuccess action creator', () => {
  expect(
    actions.fetchTreasureSuccess({ id: 1, latitude: 2, longitude: 3 }, false),
  ).toEqual(
    expect.objectContaining({
      type: actions.FETCH_TREASURE_SUCCESS,
      item: { id: 1, latitude: 2, longitude: 3 },
      treasure: false,
    }),
  );
});

test('fetchTreasureError action creator', () => {
  expect(actions.fetchTreasureError('error')).toEqual(
    expect.objectContaining({
      type: actions.FETCH_TREASURE_ERROR,
      error: 'error',
    }),
  );
});

test('treasureExists action creator', () => {
  expect(actions.treasureExists()).toEqual(
    expect.objectContaining({
      type: actions.TREASURE_DATA_EXISTS,
    }),
  );
});
