import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { MainScreenNavigator } from '../containers/Tab'
import { MyDrawer } from '../containers/Drawer'
import {
    View,
    Text,
    Button
} from 'react-native'

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Welcome to Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Tab')}
      title = ' Open the Map'
    >
     
    </Button>
  </View>
)
export const AppNavigator = StackNavigator({
        Tab: { screen: MainScreenNavigator},
      Home: { screen: HomeScreen },


});

//console.log('AppNavigator',AppNavigator)

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);