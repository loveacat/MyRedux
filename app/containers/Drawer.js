import React from 'react'
import {
    Image,
    Text,
    Button,
    StyleSheet,
} from 'react-native'
import { DrawerNavigator } from 'react-navigation'
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title:'Mydrawer',
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/a.jpg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Go to Tab"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export const MyDrawer = DrawerNavigator({
  Drawer: {
    screen: MyHomeScreen,
  },
},{
    drawerWidth:200,
    drawerPosition: 'left',
});