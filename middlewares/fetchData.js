import fetch from 'isomorphic-unfetch'

const API_ROOT = 'https://hahow-recruit.herokuapp.com/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const fetchData = async function(endpoint, method='GET', body) {
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

export default fetchData
