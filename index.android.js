
//import { AppRegistry } from 'react-native'
import AppContainer from './app/containers/AppContainer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// middleware that logs actions
//const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      createLogger,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});


export default class MyRedux extends Component {
  render() {
    return (
      <View >
        <Text >
          Welcome to React Native!
        </Text>
        <Text >
          To get started, edit index.android.js
        </Text>
        <Text >
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const App = ()=>(
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('MyRedux', () => App);
