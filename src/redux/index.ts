/**
 * 1, reducer, [initialState], [enhancer]
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from 'redux-saga';
import rootRecuder from './reducer';
import rootSaga from './saga/sagas/index';

const sagaMiddleware = createMiddleware();

const composeEnhancer = 
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
                                        

const store = createStore(rootRecuder, composeEnhancer(
  applyMiddleware(
    sagaMiddleware
  )
));

sagaMiddleware.run(rootSaga);

export default store;