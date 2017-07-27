import React,{ Component } from 'react'
import {
	View,
	Text
}	from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class AppContainer extends Component {

	render() {
		return (
			<View style={{marginTop:20}}>
				<Text>
					I am app container
				</Text>
			</View>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}