import { combineReducers } from 'redux';
import * as recipesReducer from './recipesReducer'
//import * as navigationReducer from './navigation'

import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigator/AppNavigator';

// const initialState = {
//   index:0,
//   routeName:'Tab',
//   routes:[
//     {key:'Recent',routeName:'Recent'},
//     {key:'All',routeName:'All'}
//   ]
// }
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));
console.log('initstate',initialState)
const nav = (state = initialState, action) => {
  //const nextState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('MyDrawer'));
  //console.log('nextstate',nextState)
  // Simply return the original `state` if `nextState` is null or undefined.
  //let nextstate = {} ;
  const nextState = AppNavigator.router.getStateForAction(action, state);
  console.log('state',nextState)
  return nextState || state;
};

export default combineReducers({
  nav
})
