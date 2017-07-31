/**
 * Created by tdzl2003 on 12/18/16.
 */
import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,

} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import Conference from './Conference';
import MyAccount from './MyAccount';
import Message from './Message';
//import { UserMessage } from '../../logics/UserMessage';
//import { observer } from 'mobx-react/native';
//import { getToken } from '../../logics/rpc';
//import JPushModule from 'jpush-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF'
  },
});

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  // openNotification = message => {
  //   console.log('openNotification')
  //   if (message['extras']) {
  //     const messid = JSON.parse(message['extras']).msgid
  //     this.context.navigator.push({
  //       location:'/home/messagedetail',
  //       passProps:{messid}
  //     })
  //   } else {
  //     console.log('notification', message)
  //   }
  // }

  // receiverNotice = ()=>{
  //   this.mess.refreshlist()
  // }
  
  // componentWillMount() {
  //     if (Platform.OS === 'android') {
  //       JPushModule.initPush();
  //       JPushModule.addReceiveNotificationListener(this.receiverNotice)
  //     }
  //     let userInfo = getToken()
  //     if( userInfo.phone ){
  //       JPushModule.setAlias(userInfo.phone,
  //         suc=>console.log('setAlias suc',suc),error=>console.warn(error)) 
  //     }
  //     JPushModule.addReceiveOpenNotificationListener(this.openNotification);
  // }
  

  // componentWillUnmount = () => {
  //   JPushModule.removeReceiveNotificationListener(this.receiverNotice);
  //   JPushModule.removeReceiveOpenNotificationListener(this.openNotification);
  // }
  // mess = new UserMessage()

  render() {
    return (
    <TabNavigator>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'home'}
        title="我的会议"
        renderIcon={() => <Icon name="ios-home" size={20} color="#929292" />}
        renderSelectedIcon={() => <Icon name="ios-home" size={20} color="#007cca" />}
        onPress={() => this.setState({ selectedTab: 'home' })}>
        <Conference />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'message'}
        title="消息"
        //badgeText={this.mess.unReadNumber}
        renderIcon={() => <Icon name="ios-chatbubbles" size={20} color="#929292" />}
        renderSelectedIcon={() => <Icon name="ios-chatbubbles" size={20} color="#007cca" />}    
        onPress={() => this.setState({ selectedTab: 'message' })}>
        <Message />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'profile'}
        title="个人中心"
        renderIcon={() => <Icon name="ios-person" size={20} color="#929292" />}
        renderSelectedIcon={() => <Icon name="ios-person" size={20} color="#007cca" />}    
        onPress={() => this.setState({ selectedTab: 'profile' })}>
        <MyAccount />
      </TabNavigator.Item>
    </TabNavigator>
    );
  }
}
