import { put, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as sagas from './sagas';
const items = [{ id: 1, latitude: 1, longitude: 1 }];
const action = { item: [{ id: 1, latitude: 1, longitude: 1 }] };
const api = {
  getTreasureSites: async () => {
    return items;
  },
};

describe('fetch item', () => {
  it('calls success', () => {
    const generator = sagas.fetchAllItems(action);
    const result = generator.next().value;
    expect(result.type).toEqual('CALL');
    expect(generator.next().value).toEqual(
      put(actions.fetchItemsSuccess(action.items)),
    );
  });
  it('calls error', () => {
    const generator = sagas.fetchAllItems();
    expect(generator.next().value.type).toEqual('CALL');
    expect(generator.next().value.type).toEqual('PUT');
  });
});
