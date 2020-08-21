import * as actions from './actions';

test('alert', () => {
  expect(actions.sendAlert({ treasure: false }, 'test')).toEqual(
    expect.objectContaining({
      type: actions.SEND_ALERT,
      treasure: false,
      message: 'test',
    }),
  );
});
