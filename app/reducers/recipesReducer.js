import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const items = createReducer({isFetching:false,item:[]},{
	[types.SET_SEARCHED_RECIPES](state,action){
		return Object.assign({},state,{isFetching:true})
	},
	[types.RECEIVED_REICIPES](state,action){
		return Object.assign({},state,{item:state.item.contact(action.recipes)})
	}
});

// export const Recipes = createReducer([],{
// 	[types.RECEIVED_REICIPES](state,action){
// 		return action.recipes
// 	}
// });
export const RecipeCount = createReducer(0,{
	[types.RECEIVED_REICIPES](state,action){
		return state+action.recipes.length
	}
})