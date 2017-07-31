import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './TouchRow.style';
import Icon from 'react-native-vector-icons/Ionicons';
export default class TouchRow extends Component {
  static propTypes = {
    rowstyle: PropTypes.object,
    onPress: PropTypes.func,
    renderIcon: PropTypes.bool,
    select: PropTypes.bool,
    Label: PropTypes.string,
    title: PropTypes.string,
    renderCenter: PropTypes.func,
    Content: PropTypes.string,
    renderNext: PropTypes.bool,
    renderRight: PropTypes.func,
    renderRightIcon: PropTypes.bool,
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity style={[styles.row, this.props.rowstyle]} onPress={this.props.onPress}>
        <View style={styles.navLeftContainer}>
          {
            this.props.Icon ?
            <View style={styles.iconrow}>
              <Icon name={this.props.Icon} size={25} color="#E0BCB0" style={styles.icon} />
            </View>
            : null
          }
          <Text style={styles.Label}>{this.props.Label}</Text>
        </View>
        <View style={styles.navCenterContainer}>
          {
            this.props.title ?
              <Text style={styles.renderCenterTitle}>{this.props.title}</Text>
              : this.props.renderCenter && this.props.renderCenter()
          }
        </View>
        <View style={styles.navRightContainer}>

          {
            this.props.Content ? <Text style={styles.Content}>{this.props.Content}</Text> : null
          }
          {
            this.props.renderNext ?
              <Icon name="ios-arrow-forward" size={25} color="#959595" style={styles.righticon} />
              //<Image source={require('../pages/assets/next@2x.png')} style={styles.next} />
            : this.props.renderRightIcon ?
              this.props.select ?
                <Icon name="md-checkmark" size={25} color="#E0BCB0" style={styles.righticon} /> : null
                : this.props.renderRight && this.props.renderRight()
          }
        </View>
      </TouchableOpacity>
    );
  }
}
