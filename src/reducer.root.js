import { combineReducers } from 'redux';
import screensReducer from './screens/reducer.screens';
import entitiesReducer from './entities/reducer.entities';

export default combineReducers({
  screens: screensReducer,
  entities: entitiesReducer,
});
