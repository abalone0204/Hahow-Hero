import { combineReducers } from 'redux'
import heroes from './heroes'

const reducer = combineReducers({
	heroes,
})

export default reducer
