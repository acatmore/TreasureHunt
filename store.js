/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';
import { createStore, configureStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import rootSaga from './store/sagas';
import devTools, { composeWithDevTools } from 'remote-redux-devtools';
// import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const enhance = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export default () => {
  const store = createStore(
    reducers, enhance(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

