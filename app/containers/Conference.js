import React from 'react'
import {
    Image,
    Text,
    Button,
    StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { getQrcode } from '../actions/recipes'
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
      <Button title='getQrocde' onPress={()=>this.props.getQrcode()}/>
      
    );
  }
}

export default connect(null,{getQrcode})(MyHomeScreen)
