// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, Dimensions  } from 'react-native'
import { NavigationActions } from 'react-navigation'
//import { getIsLoggedIn } from 'src/redux/reducers/auth'
//import { getIsAppReady } from 'src/redux/reducers/app'
import { ActionCreators } from '../actions'

const mapStateToProps = (state: Object) => ({
  isAppReady: state.isAppReady,
  isLogged: state.isLogged,
})

const screen = Dimensions.get('window');

class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount () {
    this.props.initialize()
  }

  componentDidUpdate () {
    if (this.props.isAppReady) {
      if (this.props.isLogged) {
        setTimeout(()=>this._navigateTo('Main'),100)
      } else {
        setTimeout(()=>this._navigateTo('Login'),100)
      }
    }
  }

  _navigateTo = (routeName: string) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render () {
    return (
      <View style={styles.container} >
        <Image
          source={require('../assets/start.jpg')}
          resizeMode="stretch"
          style={{width:screen.width,height:screen.height}}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, ActionCreators)(SplashScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})
