import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { MainScreenNavigator } from '../containers/Tab'
import { MyDrawer } from '../containers/Drawer'
import SplashScreen from '../containers/SplashScreen'
import MainScreen from '../containers/AppContainer'
import Login from '../containers/Login'
import {
    View,
    Text,
    Button
} from 'react-native'

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Welcome to Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Main')}
      title = ' Open the Map'
    >
     
    </Button>
  </View>
)
export const AppNavigator = StackNavigator({
  Splash: { screen: SplashScreen },
  Login: { screen: Login },
  Home: { screen: HomeScreen },
  Main: { screen: MainScreen }
});

//console.log('AppNavigator',AppNavigator)

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);