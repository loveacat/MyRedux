import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Navigator,
  KeyboardAvoidingView
} from 'react-native';
import InputScrollView from 'react-native-inputscrollview';
import styles from './Login.style';
//import router from '../../utils/routerDecorator';
import Icon from 'react-native-vector-icons/Ionicons';
//import { login } from '../../logics/auth';
//import { saveToken } from '../../logics/rpc';
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'


class LoginIndex extends Component{
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.isSend = false;
    this.state = {
      username: '',
      pwd: '',

    };
  }

  // onSubmit = async () => {
  //   try {
  //     const { username, pwd } = this.state;
  //     if (this.isSend) {
  //       return;
  //     }
  //     this.isSend = true;
  //     if (!username || !pwd) {
  //       Alert.alert('提示', '请输入手机号和密码');
  //     } else {
  //       const user = await login(username, pwd);
  //       saveToken(user);
  //       this.context.navigator.replace({
  //         location: '/home/home',
  //       });
  //     }
  //   } catch (err) {
  //     Alert.alert('提示', err.message);
  //   } finally {
  //     this.isSend = false;
  //   }
  // };

  onSubmit = ()=>{
    const { username, pwd } = this.state;
    if (this.props.isLogging) {
      return;
    }
    if (!username || !pwd) {
      Alert.alert('提示', '请输入手机号和密码');
    } else {
      this.props.login(this.state.username,this.state.pwd)
    }
  }

  toTag = (location, type) => {
    this.context.navigator.push({
      location,
      passProps: { type },
    });
  }

  changeToManage =() => {
    this.context.navigator.replaceWithAnimation({
      location: '/home/managerlogin',
      sceneConfig: Navigator.SceneConfigs.FloatFromRight,
    });
  }
  render() {
    return (
      <View style={styles.mainContainer} >
        <KeyboardAvoidingView style={styles.container} behavior="padding" >
          <View style={styles.logoRow}>
            <Image
              source={require('../assets/home.jpg')}
              style={styles.logo}/>
          </View>
          <View style={styles.inputRow}>
            <Icon name="ios-person-outline" size={25} style={styles.icon} color="#c4c4c4" />
            <TextInput
              placeholder="请输入手机号"
              keyboardType='numeric'
              underlineColorAndroid="transparent"
              placeholderTextColor='#cbcbcb'
              onChangeText={text => this.setState({ username: text })}
              value={this.state.username}
              style={[styles.text, styles.inputLayout]}
            />
          </View>
          <View style={styles.inputRow}>
            <Icon name="ios-lock-outline" size={25} style={styles.icon} color="#c4c4c4" />
            <TextInput
              placeholder="请输入密码"
              underlineColorAndroid="transparent"
              placeholderTextColor='#cbcbcb'
              onChangeText={text => this.setState({ pwd: text })}
              value={this.state.pwd}
              secureTextEntry
              style={[styles.text, styles.inputLayout]}
            />
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={this.onSubmit}
              >
                <Text style={[styles.text, styles.buttonText]}>登录1.1</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.link} onPress={() => this.toTag('/home/regist', '忘记密码')}>
                <Text style={styles.footerText}>忘记密码</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.link} onPress={() => this.toTag('/home/regist', '注册账户')}>
                <Text style={styles.footerText}>立即注册</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.jumpbutton1} onPress={this.changeToManage}>
          <Text style={styles.jumpbuttontext}>管理员登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const  mapStatetoProps = (state)=>({
  isLogging:state.isLogging
})
export default connect(null,ActionCreators)(LoginIndex)