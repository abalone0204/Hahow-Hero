export const BAD_ENDPOINT = 'BAD_ENDPOINT'
export const GOOD_ENDPOINT = 'GOOD_ENDPOINT'

export default function fetchData(endpoint, method='GET', body) {
	return new Promise((resolve, reject) => {
		process.nextTick(
			() => {
				if (endpoint === GOOD_ENDPOINT) return resolve({})
				if (endpoint === BAD_ENDPOINT) return reject({})
				throw new Error('Mock fetch data only accept BAD_ENDPOINT or GOOD_ENDPOINT')
			}
		)
	})
}
