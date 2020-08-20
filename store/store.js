import { createStore, configureStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './sagas';
import devTools, { composeWithDevTools } from 'remote-redux-devtools';

const sagaMiddleware = createSagaMiddleware();
const enhance =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export default () => {
  const store = createStore(reducer, enhance(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
};
