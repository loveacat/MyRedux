import * as types from './types'
import Api from '../lib/api'
import { post } from '../lib/rpc';
export function setReceipes() {
	// body...
	return	{
		type: types.SET_SEARCHED_RECIPES,
	}
}

export function	fetchRecipes(ingredients){
	return async(dispatch) => {
		dispatch(setReceipes());
		const params = [
	      `i=${encodeURIComponent(ingredients)}`,
	      'p=1'
	    ].join('&')
		let resp = await Api.get(`/api/?${params}`)
		console.log('resp',resp)
		dispatch(receiveReceipes(resp))
	}
}

export function receiveReceipes(recipes){
	return {
		type:types.RECEIVED_REICIPES,
		recipes:recipes
	}
}
export function addReceipes(){
	return {
		type:types.ADD_REICIPES,
	}
}



export function getQrcode(){
	return async(dispatch,getState) =>{
		let cusid = getState().userinfo.cusid
		let result = await post('getQrcode',{cusid})
		console.log('qrcode',result)
		dispatch({
			type:'GET_QRCODE'
		})
	}
}
	