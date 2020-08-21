import * as actions from 'actions';

test('checkTreasure action creator', () => {
  expect(actions.checkTreasure({ id: 1, latitude: 2, longitude: 3 })).toEqual(
    expect.objectContaining({
      type: actions.CHECK_TREASURE,
      item: { id: 1, latitude: 2, longitude: 3 },
    }),
  );
});

test('checkTreasureSuccess action creator', () => {
  expect(
    actions.checkTreasureSuccess(
      { id: 1, latitude: 2, longitude: 3 },
      { treasure: false },
    ),
  ).toEqual(
    expect.objectContaining({
      type: actions.FETCH_TREASURE_SUCCESS,
      item: { id: 1, latitude: 2, longitude: 3 },
      treasure: false,
    }),
  );
});

test('checkTreasureError action creator', () => {
  expect(actions.checkTreasureError({ error: 'error' })).toEqual(
    expect.objectContaining({
      type: actions.FETCH_TREASURE_ERROR,
      error: 'error',
    }),
  );
});

test('treasureExists action creator', () => {
  expect(actions.checkTreasure()).toEqual(
    expect.objectContaining({
      type: actions.TREASURE_DATA_EXISTS,
    }),
  );
});
