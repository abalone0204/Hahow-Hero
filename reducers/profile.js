import { combineReducers } from 'redux'

import {
	HERO_PROFILE_REQUEST,
	HERO_PROFILE_RESPONSE,
	HERO_PROFILE_ERROR,
	HERO_ATTR_SET,
	HERO_REMAIN_SET,
} from '../constants'

const status = (state='init', action) => {
	switch(action.type) {
	case HERO_PROFILE_REQUEST:
		return 'fetching'
	case HERO_PROFILE_RESPONSE:
		return 'done'
	case HERO_PROFILE_ERROR:
		return 'failed'
	default:
		return state
	}
}

const data = (state={}, action) => {
	switch(action.type) {
	case HERO_ATTR_SET:
		return Object.assign({}, state, {
			[action.id]: Object.assign({}, state[action.id], {
				[action.attr]: action.val
			})
		})
	case HERO_REMAIN_SET:
		return Object.assign({}, state, {
			[action.id]: Object.assign({}, state[action.id], {
				remain: action.val
			})
		})
	case HERO_PROFILE_RESPONSE:
		return Object.assign({}, state, {
			[action.response.id]: Object.assign({}, action.response, {
				remain: 0,
			})
		})
	default:
		return state
	}
}


const errorMessage = (state=null, action) => {
	if (action.type === HERO_PROFILE_ERROR) {
		return action.error
	}
	return state
}

const reducer = combineReducers({
	status,
	data,
	errorMessage,
})

export default reducer