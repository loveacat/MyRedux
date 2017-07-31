import { TabNavigator } from "react-navigation";
import React from 'react'
import {
    Text,
    View,
    Button
} from 'react-native'
class RecentChatsScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return(
        <View>
            <Text>List of recent chats</Text>
            <Button 
                title='test'
                onPress={()=>this.props.navigation.navigate('Home')}
            />
        </View>
    )
    
  }
}

class AllContactsScreen extends React.Component {

  render() {
    return <Text>List of all contacts</Text>
  }
}

const TabNavigatorConfig = {
    tabBarPosition : 'top',
    tabBarPosition :{
        activeTintColor :'blue',
        activeBackgroundColor :'#FFFFFF',
    }

}
export const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
},TabNavigatorConfig);
