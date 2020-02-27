import { combineReducers } from 'redux';

import users from './users';
import portfolios from './portfolios';

export default combineReducers({
  users,
  portfolios,
});
