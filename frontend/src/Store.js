import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

export default function configureStore(initState) {
  const middleware = [thunkMiddleware];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
  const store = createStore(
    rootReducer,
    initState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
