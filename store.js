/* eslint-disable prettier/prettier */
import { createStore, configureStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import rootSaga from './store/sagas';
import composeWithDevTools from 'remote-redux-devtools';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

