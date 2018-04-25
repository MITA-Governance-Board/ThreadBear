import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import resourceReducer from './resourceReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  test:  resourceReducer('tests')
});

export default rootReducer;
