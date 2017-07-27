import * as types from './types'

export function getReceipes(recipes) {
	// body...
	return	{
		type: types.SET_SEARCHED_RECIPES,
		recipes,
	}
}

export function addReceipes(){
	return {
		type:types.ADD_REICIPES,
	}
}