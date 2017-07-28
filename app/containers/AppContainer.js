import React,{ Component } from 'react'
import {
	View,
	Text,
	Button
}	from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators  from '../actions/recipes'
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
			<View style={{marginTop:20}}>
				<Text>
					I am app container {this.props.RecipeCount}
				
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
    RecipeCount: state.RecipeCount
  };
}

export default connect(mapStateToProps, ActionCreators)(AppContainer);
