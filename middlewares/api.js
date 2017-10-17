import fetch from 'isomorphic-unfetch'
import { CALL_API } from '../constants'

const API_ROOT = 'https://hahow-recruit.herokuapp.com/'


// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = async function(endpoint, method='GET', body) {
	const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
	const options = (method === 'GET') ? { method } :{ method, body: JSON.stringify(body), headers: {
		'Content-Type': 'application/json'
	}}

	const res = await fetch(fullUrl, options)
	if (!res.ok) return Promise.reject(res.statusText)

	const isJSON = (response) => response.headers.get('content-type').startsWith('application/json')
	if (isJSON(res)) {
		const json = await res.json()
		return Promise.resolve(json)
	}
	return Promise.resolve({})
}

export default store => next => action => {
	const callAPI = action[CALL_API]
	if (typeof callAPI === 'undefined') {
		return next(action)
	}

	let { endpoint } = callAPI
	const { types, params, method } = callAPI

	if (typeof endpoint === 'function') {
		endpoint = endpoint(store.getState())
	}

	if (typeof endpoint !== 'string') {
		throw new Error('Specify a string endpoint URL.')
	}

	if (!Array.isArray(types) || types.length !== 3) {
		throw new Error('Expected an array of three action types.')
	}
	if (!types.every(type => typeof type === 'string')) {
		throw new Error('Expected action types to be strings.')
	}

	const actionWith = data => {
		const finalAction = Object.assign({}, action, data)
		delete finalAction[CALL_API]
		return finalAction
	}

	const [ requestType, successType, failureType ] = types
	next(actionWith({ type: requestType }))


	let promise
	if (method && method !== 'GET') {
		promise = callApi(endpoint, method, params.body)
	} else {
		promise = callApi(endpoint, 'GET')
	}
	return promise.then(
		response => {
			if (params && params.id) {
				response.id = params.id
			}
			next(actionWith({
				response,
				type: successType
			}))
		},
		error => next(actionWith({
			type: failureType,
			error: error.message || 'Something bad happened'
		}))
	)
}

