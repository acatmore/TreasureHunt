// import { put, call } from 'redux-saga/effects';
// import * as actions from './actions';
// import * as sagas from './sagas';
// const items = [{ id: 1, latitude: 1, longitude: 1 }];
// const item1 = { id: 1, latitude: 1, longitude: 1 };
// const api = {
//   siteHasTreasure: () => {
//     items;
//   },
// };

// describe('fetch treasure', () => {
//   const data = { item: item1 };
//   it('calls success if no treasure data exists', () => {
//     const generator = sagas.checkAllTreasure(data);
//     expect(generator.next().value).toEqual(call(api.sitesHasTreasure, data.id));
//     expect(generator.next().value).toEqual(
//       put(actions.fetchTreasureSuccess(items)),
//     );
//   });
//   it('calls failure if no treasure data exists', () => {
//     const generator = sagas.checkAllTreasure(data);
//     expect(generator.next().value).toEqual(call(api.sitesHasTreasure, data.id));
//     expect(generator.throw('test').value).toEqual(
//       put(actions.fetchTreasureError('test')),
//     );
//   });
// });
