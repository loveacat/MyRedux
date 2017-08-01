import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const isLogging = createReducer(false,{
		[types.USER_LOGIN_START](state,action){
		return true
    },
    [types.USER_LOGIN_SUCCESS](state,action){
		return false
    },
    [types.USER_LOGIN_FAIL](state,action){
		return false
    },
})

export const isLogged = createReducer(false,{
	[types.USER_LOGIN_SUCCESS](state,action){

		return true
	},
	[types.INIT_APP](state,action){
		if(action.userinfo.token){
			return true
		}else{
			return false
		}
  }
})


export const userinfo = createReducer({},{
	[types.USER_LOGIN_SUCCESS](state,action){
		return action.userinfo
	},
	[types.INIT_APP](state,action){
		return action.userinfo
  }
})