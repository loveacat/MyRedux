import { combineReducers } from 'redux';
import * as recipesReducer from './recipesReducer'
//import * as navigationReducer from './navigation'

import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigator/AppNavigator';
let initialNavState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

// const firstAction = AppNavigator.router.getActionForPathAndParams("Tab");

// //Then calculate the state with a navigate action to the first route, sending the previous initialized state as argument
// initialNavState = AppNavigator.router.getStateForAction(
//   firstAction,
//   initialNavState
// );
// const initialState = {
//   index:0,
//   routeName:'Tab',
//   routes:[
//     {key:'Recent',routeName:'Recent'},
//     {key:'All',routeName:'All'}
//   ]
// }
//const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Tab'));
console.log('initstate',initialNavState)
const nav = (state = initialNavState, action) => {
  //const nextState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('MyDrawer'));
  //console.log('nextstate',nextState)
  // Simply return the original `state` if `nextState` is null or undefined.
  //let nextstate = {} ;
  const nextState = AppNavigator.router.getStateForAction(action, state);
  console.log('state',nextState)
  return nextState || state;
};

export default combineReducers(Object.assign(
	{nav},
	recipesReducer
))
