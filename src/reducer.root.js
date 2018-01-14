import { combineReducers } from 'redux';
import screensReducer from './screens/reducer.screens';

export default combineReducers({
  screens: screensReducer,
});
