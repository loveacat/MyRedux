import React, { Component, PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './MyAccount.style';
import TouchRow from '../components/TouchRow';
import { logout } from '../actions/auth';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { logout } from '../../logics/rpc';

class MyAccount extends Component {

  constructor(props) {
    super(props);

  }

  toTag = (locate) => {
    this.context.navigator.push({
      location: locate,
    });
  };

  accountlogout = async () => {
    await logout();
    this.context.navigator.immediatelyResetRouteStack([{
      location: '/home/login',
    }]);
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        
        <View style={styles.container}>
          <View style={styles.sept} />
          <TouchRow
            Label="个人资料"
            renderNext
            onPress={() => this.toTag('/home/changeprofile')}
          />
          <TouchRow
            Label="修改密码"
            renderNext
            onPress={() => this.toTag('/home/changepassword')}
          />
          <TouchRow
            Label="参会码"
            renderNext
            onPress={() => this.toTag('/home/mycode')}
          />
          <TouchRow
            Label="我的关注"
            renderNext
            onPress={() => this.toTag('/home/favorite')}
          />
          <TouchRow
            Label="我的发票"
            renderNext
            onPress={() => this.toTag('/home/invoicelist')}
          />
          <View style={styles.sept} />
          <TouchRow
            Label="设置"
            onPress={() => this.toTag('/home/set')}
            renderNext
          />
          <TouchableOpacity style={styles.logoutbutton} onPress={()=>this.props.logout()}>
            <Text style={{ color: '#FFFFFF' }}>注销登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logout}, dispatch);
}
export default connect(null,mapDispatchToProps)(MyAccount)