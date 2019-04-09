
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import usersReducer from './usersReducer';
import addUserReducer from './addUserReducer';

export default () => combineReducers({
  usersReducer,
  form: formReducer,
  addUserReducer,
});
