import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducers';
import rootSaga from './sagas/sagas';

const saga = createSagaMiddleware();

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares, saga)),
);

saga.run(rootSaga);

export default store;
