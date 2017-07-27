import * as types from './types'

export function getReceipes(recipes) {
	// body...
	return	{
		type: types.SET_SEARCHED_RECIPES,
		recipes,
	}
}