import { combineEpics } from 'redux-observable';
import screensEpic from './screens/epic.screens';

export default combineEpics(
  screensEpic,
);
