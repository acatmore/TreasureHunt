// import { put, call } from 'redux-saga/effects';
// import * as actions from './actions';
// import * as sagas from './sagas';
// const items = [{ id: 1, latitude: 1, longitude: 1 }];
// const api = {
//   getTreasureSites: () => {
//     items;
//   },
// };

// describe('fetch item', () => {
//   it('calls success', () => {
//     const generator = sagas.fetchAllItems();
//     expect(generator.next().value).toEqual(call(api.getTreasureSites));
//     expect(generator.next().value).toEqual(
//       put(actions.fetchItemsSuccess(items)),
//     );
//   });
//   it('calls failure', () => {
//     const generator = sagas.fetchAllItems();
//     expect(generator.throw('test').value).toEqual(
//       put(actions.fetchItemsError('test')),
//     );
//   });
// });
