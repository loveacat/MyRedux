import * as types from './types'
import Api from '../lib/api'
import { post } from './rpc';

export function login_success(token){
	return {
		type:types.USER_LOGIN_SUCCESS,
		token:token
	}
}

export function login_fail(error){
	return {
		type:types.USER_LOGIN_FAIL,
		msg:error
	}
}
export function login_start(){
	return {
		type:types.USER_LOGIN_START,
	}
}
export function	login(phone,pwd){
	return async(dispatch) => {
		dispatch(login_start());
	    try{
			let resp = await post('userLogin',{phone,pwd})
			console.log('resp',resp)
			dispatch(login_success(resp))
		} catch(err){
			dispatch(login_fail(err))
		}
	}
}

export function logout(){
	return {
		type:types.USER_LOGOUT,
	}
}

export function initializeApp(){
	return {
		type:types.INIT_APP,
	}
}