import reducer from '../hero'
import {
	HEROES_REQUEST,
	HEROES_RESPONSE,
	HEROES_ERROR,
} from '../../constants'

describe('reducer: hero', () => {

	it('should return the initial state', () => {
		expect(reducer(undefined, {}))
			.toEqual({
				data: [],
				errorMessage: null,
				status: 'init',
			})
	})
	it('should handle HEROES_REQUEST', () => {
		expect(
			reducer({
				data: [],
				errorMessage: null,
				status: 'init',
			}, {
				type: HEROES_REQUEST
			})
		).toEqual({
			data: [],
			errorMessage: null,
			status: 'fetching',
		})
	})
	it('should handle HEROES_RESPONSE', () => {
		expect(
			reducer({ data: [], errorMessage: null, status: 'fetching' }, { type: HEROES_RESPONSE, response: [] })
		).toEqual({
			data: [],
			errorMessage: null,
			status: 'done',
		})
		expect(
			reducer({ data: [], errorMessage: null, status: 'fetching' }, { type: HEROES_RESPONSE, response: [{
				id: '1',
				name: 'Thor'
			}] })
		).toEqual({
			data: [{
				id: '1',
				name: 'Thor'
			}],
			errorMessage: null,
			status: 'done',
		})
		expect(
			reducer({ data: [{ id: '2', name: 'Spider man'}], errorMessage: null, status: 'fetching' }, { type: HEROES_RESPONSE, response: [{
				id: '1',
				name: 'Thor'
			}] })
		).toEqual({
			data: [{
				id: '1',
				name: 'Thor'
			}],
			errorMessage: null,
			status: 'done',
		})
	})
	it('should handle HEROES_ERROR', () => {
		expect(
			reducer(undefined, { type: HEROES_ERROR, error: 'something wrong' })
		).toEqual({
			data: [],
			errorMessage: 'something wrong',
			status: 'failed',
		})
	})
})
