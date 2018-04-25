import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import resourceReducer from './resourceReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  source:  resourceReducer('sources'),
  requirement:  resourceReducer('requirements')
});

export default rootReducer;
