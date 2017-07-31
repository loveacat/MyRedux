import React from 'react'
import {
    Image,
    Text,
    Button,
    StyleSheet,
} from 'react-native'
export default class Message extends React.Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
      <Text>
        message
      </Text>
    );
  }
}