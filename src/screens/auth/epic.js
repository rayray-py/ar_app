// @flow
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import * as actions from './actions';

const signUpEpic = aciton$ =>
  aciton$.ofType(actions.SIGN_UP)
    .exhaustMap(({ payload }) => {
      return Observable.fromPromise(
          firebase.auth().createUserWithEmailAndPassword(payload),
        )
        .mapTo(actions.successSignUp())
        .do(() => Actions.reset('root'))
        .catch(() =>
          Observable.of(actions.failSignUp())
        );
    });

const signInEpic = aciton$ =>
  aciton$.ofType(actions.SIGN_IN)
    .exhaustMap(({ payload }) => {
      return Observable.fromPromise(
          firebase.auth().signInWithEmailAndPassword(payload),
        )
        .mapTo(actions.successSignIn())
        .do(() => Actions.reset('root'))
        .catch(() =>
          Observable.of(actions.failSignIn())
        );
    });

export default combineEpics(
  signUpEpic,
  signInEpic,
);
