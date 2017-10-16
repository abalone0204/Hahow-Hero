import { combineReducers } from 'redux'

import {
	HEROES_REQUEST,
	HEROES_RESPONSE,
	HEROES_ERROR,
} from '../constants'

const status = (state='init', action) => {
	switch(action.type) {
	case HEROES_REQUEST:
		return 'fetching'
	case HEROES_RESPONSE:
		return 'done'
	case HEROES_ERROR:
		return 'failed'
	default:
		return state
	}
}

const data = (state=[], action) => {
	switch(action.type) {
	case HEROES_RESPONSE:
		return action.response
	default:
		return state
	}
}

const errorMessage = (state=null, action) => {
	if (action.type === HEROES_ERROR) {
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