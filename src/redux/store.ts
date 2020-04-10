import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducers';
import rootSaga from './sagas/sagas';

export default function configureStore() {
  const saga = createSagaMiddleware();
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  middlewares.push(saga);
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers: any = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(reducer, composedEnhancers);
  saga.run(rootSaga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/reducers', () =>
      store.replaceReducer(reducer),
    );
  }
  return store;
}
