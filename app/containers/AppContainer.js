import React,{ Component } from 'react'
import {
	View,
	Text,
	Button
}	from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
class AppContainer extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	recipes:0
	  };
	}

	addRecipes = ()=>{
		this.props.addReceipes()
	}
	render() {
		return (
			<View style={{marginTop:20}}>
				<Text>
					I am app container
				
				</Text>
				<Button onPress={()=>this.addRecipes()}  title='add recipes'/>
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

export default connect(null, mapDispatchToProps)(AppContainer);
