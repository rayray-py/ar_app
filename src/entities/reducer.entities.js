import { combineReducers } from 'redux';
import currentUserReducer from './currentUser/reducer';

export default combineReducers({
  currentUser: currentUserReducer,
});
