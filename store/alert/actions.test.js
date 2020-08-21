import * as actions from './actions';

test('alert', () => {
  expect(actions.sendAlert(false, 'test')).toEqual(
    expect.objectContaining({
      type: actions.SEND_ALERT,
      treasure: false,
      message: 'test',
    }),
  );
});
