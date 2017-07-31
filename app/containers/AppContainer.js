import React,{ Component } from 'react'
import {
	View,
	Text,
	Button
}	from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators  from '../actions/recipes'
import Home from './Home'
class AppContainer extends Component {
	constructor(props) {
	  super(props);
		console.log('actioncreater',ActionCreators)
	  this.state = {
	  	recipes:0
	  };
	}

	addRecipes = ()=>{
		this.props.fetchRecipes('bacon,cucumber')
	}
	render() {
		return (
			<Home {...this.props} />
		)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(null, ActionCreators)(AppContainer);
