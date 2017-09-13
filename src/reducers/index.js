import { combineReducers } from 'redux';
import users from './users-reducer';
import user from './user-reducer';

const rootReducer = combineReducers({
  user,
  users
});

export default rootReducer;
