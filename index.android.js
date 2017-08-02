
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
  View,
  Button,
} from 'react-native';
import AppWithNavigationState from './app/navigator/AppNavigator';
import { StackNavigator } from 'react-navigation';
import { MainScreenNavigator } from './app/containers/Tab'
import { MyDrawer } from './app/containers/Drawer'
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

export const store = configureStore({});

class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('MyRedux', () => ReduxExampleApp);
