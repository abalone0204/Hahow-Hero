import { createStore, applyMiddleware } from 'redux'
import api from '../middlewares/api'
import calculator from '../middlewares/calculator'
import rootReducer from '../reducers'

const configureStore = preloadedState => createStore(
	rootReducer,
	preloadedState,
	applyMiddleware(api, calculator)
)

export default configureStore