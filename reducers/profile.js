import { combineReducers } from 'redux'

import {
	HERO_PROFILE_REQUEST,
	HERO_PROFILE_RESPONSE,
	HERO_PROFILE_ERROR,
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
	case HERO_PROFILE_RESPONSE:
		return Object.assign({}, state, {
			[action.response.id]: action.response
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