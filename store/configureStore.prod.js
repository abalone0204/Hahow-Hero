import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middlewares/api'
import calculator from '../middlewares/calculator'
import rootReducer from '../reducers'

const configureStore = preloadedState => createStore(
	rootReducer,
	preloadedState,
	applyMiddleware(thunk, api, calculator)
)

export default configureStore