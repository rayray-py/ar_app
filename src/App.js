/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { FIREBASE } from './constants';
import store from './store';
import Router from './Router';

export default class App extends Component<{}> {
  componentWillMount() {
    const {
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId
    } = FIREBASE;

    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <Router />
        </Provider>
      </View>
    );
  }
}
