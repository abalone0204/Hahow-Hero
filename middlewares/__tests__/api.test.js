import apiMiddleware from '../api'
jest.mock('../fetchData')
import { GOOD_ENDPOINT, BAD_ENDPOINT } from '../__mocks__/fetchData'
import { CALL_API } from '../../constants'

const create = () => {
	const store = {
		getState: jest.fn(() => ({})),
		dispatch: jest.fn(),
	}
	const next = jest.fn()
	const invoke = (action) => apiMiddleware(store)(next)(action)
	const invokeThunk = (action) => () => apiMiddleware(store)(next)(action)

	return { store, next, invoke, invokeThunk }
}


describe('middleware: api', () => {

	it('should ignore other action', () => {
		const { next, invoke } = create()
		const action = {
			type: 'SOME_ACTION'
		}
		invoke(action)
		expect(next).toHaveBeenCalledWith(action)
	})

	it('should throw error if note specify endpoint uri', () => {
		const { invokeThunk } = create()
		const action = {
			[CALL_API]: {}
		}
		expect(invokeThunk(action)).toThrowError('Specify a string endpoint URL.')
	})

	it('should throw error if endpoint uri is not string', () => {
		const { invokeThunk } = create()
		const action = {
			[CALL_API]: {
				endpoint: 123
			}
		}
		expect(invokeThunk(action)).toThrowError('Specify a string endpoint URL.')
	})

	it('should throw error if don\'t specify types', () => {
		const { invokeThunk } = create()
		const action = {
			[CALL_API]: {
				endpoint: 'https://api.mock.com'
			}
		}
		expect(invokeThunk(action)).toThrowError('Expected an array of three action types.')
	})

	it('should throw error if don\'t have exactly 3 types', () => {
		const { invokeThunk } = create()
		const action = {
			[CALL_API]: {
				endpoint: 'https://api.mock.com',
				types: [
					'OK',
					'PENDING'
				]
			}
		}
		expect(invokeThunk(action)).toThrowError('Expected an array of three action types.')
	})

	it('should throw error if type is not string', () => {
		const { invokeThunk } = create()
		const action = {
			[CALL_API]: {
				endpoint: 'https://api.mock.com',
				types: [
					'OK',
					'PENDING',
					1,
				]
			}
		}
		expect(invokeThunk(action)).toThrowError('Expected action types to be strings.')
	})

	it('should dispatch request type action', () => {
		const { invoke, next } = create()
		const action = {
			[CALL_API]: {
				endpoint: GOOD_ENDPOINT,
				types: [
					'REQ',
					'RES',
					'ERROR',
				]
			}
		}
		invoke(action)
		expect(next).toHaveBeenCalledWith({ type: 'REQ'})
	})

	it('should dispatch success type', async () => {
		const { invoke, next } = create()
		const action = {
			[CALL_API]: {
				endpoint: GOOD_ENDPOINT,
				types: [
					'REQ',
					'RES',
					'ERROR',
				]
			}
		}
		await invoke(action)
		expect(next).toHaveBeenCalledWith({ type: 'RES', response: {} })
	})

	it('should dispatch failed type', async () => {
		const { invoke, next } = create()
		const action = {
			[CALL_API]: {
				endpoint: BAD_ENDPOINT,
				types: [
					'REQ',
					'RES',
					'ERROR',
				]
			}
		}
		await invoke(action)
		expect(next).toHaveBeenCalledWith({ type: 'ERROR', error: 'Something bad happened' })
	})

	it('should handle GET method', async () => {
		const { invoke, next } = create()
		const action = {
			[CALL_API]: {
				endpoint: GOOD_ENDPOINT,
				types: [
					'REQ',
					'RES',
					'ERROR',
				],
				method: 'GET',
			}
		}
		await invoke(action)
		expect(next).toHaveBeenCalledWith({ type: 'RES', response: {} })
	})

	it('should handle other methods except GET', async () => {
		const { invoke, next } = create()
		const action = {
			[CALL_API]: {
				endpoint: GOOD_ENDPOINT,
				types: [
					'REQ',
					'RES',
					'ERROR',
				],
				method: 'PATCH',
				params: { id: '1' }
			}
		}
		await invoke(action)
		expect(next).toHaveBeenCalledWith({ type: 'RES', response: { id: '1' } })
	})

})

