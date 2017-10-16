import { combineReducers } from 'redux'
import hero from './hero'
import profile from './profile'

const reducer = combineReducers({
	hero,
	profile,
})

export default reducer
