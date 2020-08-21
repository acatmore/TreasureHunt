import { put, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as sagas from './sagas';
const items = [{ id: 1, latitude: 1, longitude: 1 }];
const item = { id: 1, latitude: 1, longitude: 1 };
const action = { item: [{ id: 1, latitude: 1, longitude: 1 }] };
const api = {
  siteHasTreasure: () => {
    items;
  },
};

describe('fetch treasure', () => {
  it('calls success if no treasure data exists', () => {
    const generator = sagas.checkAllTreasure(action);
    expect(generator.next().value.payload.args).toEqual([action.item.id]);
    expect(generator.next().value).toEqual(
      put(actions.fetchTreasureSuccess(items)),
    );
  });
  it('calls error if no treasure data exists', () => {
    const generator = sagas.checkAllTreasure(action);
    expect(generator.next().value.payload.args).toEqual([action.item.id]);
    expect(generator.next().value.type).toEqual('PUT');
  });
});
