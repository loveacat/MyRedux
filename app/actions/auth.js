import * as types from './types'
import Api from '../lib/api'
import { post } from '../lib/rpc';
import { NavigationActions } from 'react-navigation'
import { loadToken, saveToken, clearToken } from '../lib/rpc'
export function login_success(userinfo){
	return {
		type:types.USER_LOGIN_SUCCESS,
		userinfo
	}
}

export function login_fail(error){
	return {
		type:types.USER_LOGIN_FAIL,
		msg:error.msg
	}
}
export function login_start(){
	return {
		type:types.USER_LOGIN_START,
	}
}
export function	login(phone,pwd){
	return async(dispatch,getState) => {
		if(!getState().isLogging){
			dispatch(login_start());
			try{
				let resp = await post('userLogin',{phone,pwd})
				console.log('resp',resp)
				saveToken(resp)
				dispatch(login_success(resp))
				dispatch(NavigationActions.navigate({ routeName: 'Main' }))
			} catch(err){
				alert(err.message)
				dispatch(login_fail(err))
			}
		} else{
			return Promise.resolve()
		}
	}
}

_navigateTo = (dispatch,routeName: string) => {
	const resetAction = NavigationActions.reset({
		index: 0,
		actions: [NavigationActions.navigate({ routeName })]
	})
	dispatch(resetAction)
}

export function	logout(){
	return async(dispatch,getState) => {
		try{
			//let resp = await post('userLogin',{phone,pwd})
			//console.log('resp',resp)
			clearToken()
			dispatch(logout_success())
			_navigateTo(dispatch,'Login')
		} catch(err){
			alert(err.message)
			dispatch(logout_fail(err))
		}
	} 
	
}


export function logout_success(){
	return {
		type:types.USER_LOGOUT,
	}
}

export function logout_fail(){
	return {
		type:types.USER_LOGOUT_FAIL,
	}
}
export function initializeApp(userinfo){
	return {
		type:types.INIT_APP,
		userinfo
	}
}

export function initialize(){
	return async(dispatch)=>{
		try{
			const userinfo = await loadToken()
			if(userinfo){
				dispatch(initializeApp(userinfo))
			}
		} catch(err){		
			console.log('====================================');
			console.log('init_err',err);
			console.log('====================================');
			return dispatch(initializeApp({}))
		}
	}
}
