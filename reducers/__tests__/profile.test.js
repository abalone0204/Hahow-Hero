import reducer from '../profile'
import {
	HERO_PROFILE_REQUEST,
	HERO_PROFILE_RESPONSE,
	HERO_PROFILE_ERROR,
	HERO_PROFILE_WARN,
	HERO_ATTR_SET,
	HERO_REMAIN_SET,
	HERO_PROFILE_SUBMIT_REQUEST,
	HERO_PROFILE_SUBMIT_RESPONSE,
	HERO_PROFILE_SUBMIT_ERROR,
} from '../../constants'

describe('reducer: hero', () => {

	it('should return the initial state', () => {
		expect(reducer(undefined, {}))
			.toEqual({
				data: {},
				errorMessage: null,
				warnMessage: null,
				status: 'init',
			})
	})

	it('should handle HERO_PROFILE_REQUEST', () => {
		expect(reducer(undefined, { type: HERO_PROFILE_REQUEST }))
			.toEqual({
				data: {},
				errorMessage: null,
				warnMessage: null,
				status: 'loading',
			})
	})

	it('should handle HERO_PROFILE_RESPONSE', () => {
		expect(reducer({
			data: {},
			errorMessage: null,
			warnMessage: null,
			status: 'loading',
		}, { type: HERO_PROFILE_RESPONSE, response: { id: '1', name: 'Thor' } }))
			.toEqual({
				data: { '1': { name: 'Thor', id: '1', remain: 0 }},
				errorMessage: null,
				warnMessage: null,
				status: 'done',
			})

		expect(reducer({
			data: { '1': { name: 'Thor', id: '1', remain: 0 }},
			errorMessage: null,
			warnMessage: null,
			status: 'loading',
		}, { type: HERO_PROFILE_RESPONSE, response: { id: '2', name: 'Spider Man' } }))
			.toEqual({
				data: {
					'1': { name: 'Thor', id: '1', remain: 0 },
					'2': { name: 'Spider Man', id: '2', remain: 0 },
				},
				errorMessage: null,
				warnMessage: null,
				status: 'done',
			})
	})

	it('should handle HERO_PROFILE_ERROR', () => {
		expect(reducer({
			data: {},
			errorMessage: null,
			warnMessage: null,
			status: 'loading',
		}, {
			type: HERO_PROFILE_ERROR,
			error: 'error msg',
		}))
			.toEqual({
				data: {},
				errorMessage: 'error msg',
				warnMessage: null,
				status: 'failed',
			})
	})

	it('should handle HERO_PROFILE_WARN', () => {
		expect(reducer({
			data: {},
			errorMessage: null,
			warnMessage: null,
			status: 'loading',
		}, {
			type: HERO_PROFILE_WARN,
			warn: 'warn msg',
		}))
			.toEqual({
				data: {},
				errorMessage: null,
				warnMessage: 'warn msg',
				status: 'warned',
			})
	})

	it('should handle HERO_ATTR_SET', () => {
		expect(reducer({
			data: {
				'1': {
					id: '1',
					name: 'Thor',
					str: 1,
					agi: 2,
					int: 3,
					luk: 4,
					remain: 0,
				}
			},
			errorMessage: null,
			warnMessage: null,
			status: 'loading',
		}, {
			type: HERO_ATTR_SET,
			id: '1',
			attr: 'str',
			val: 7,
		}))
			.toEqual({
				data: {
					'1': {
						id: '1',
						name: 'Thor',
						str: 7,
						agi: 2,
						int: 3,
						luk: 4,
						remain: 0,
					}
				},
				errorMessage: null,
				warnMessage: null,
				status: 'setted',
			})
	})

	it('should handle HERO_REMAIN_SET', () => {
		expect(reducer({
			data: {
				'1': {
					id: '1',
					name: 'Thor',
					str: 1,
					agi: 2,
					int: 3,
					luk: 4,
					remain: 0,
				}
			},
			errorMessage: null,
			warnMessage: null,
			status: 'loading',
		}, {
			type: HERO_REMAIN_SET,
			id: '1',
			val: 7,
		}))
			.toEqual({
				data: {
					'1': {
						id: '1',
						name: 'Thor',
						str: 1,
						agi: 2,
						int: 3,
						luk: 4,
						remain: 7,
					}
				},
				errorMessage: null,
				warnMessage: null,
				status: 'setted',
			})
	})

	it('should handle HERO_PROFILE_SUBMIT_REQUEST', () => {
		expect(reducer(undefined, { type: HERO_PROFILE_SUBMIT_REQUEST }))
			.toEqual({
				data: {},
				errorMessage: null,
				warnMessage: null,
				status: 'loading',
			})
	})

	it('should handle HERO_PROFILE_SUBMIT_RESPONSE', () => {
		expect(reducer({
			data: {
				'1': {
					id: '1',
					name: 'Thor',
					str: 1,
					agi: 2,
					int: 3,
					luk: 4,
					remain: 0,
				}
			},
			errorMessage: null,
			warnMessage: null,
			status: 'loading',
		}, {
			type: HERO_PROFILE_SUBMIT_RESPONSE,
			id: '1'
		}))
			.toEqual({
				data: {
					'1': {
						id: '1',
						name: 'Thor',
						str: 1,
						agi: 2,
						int: 3,
						luk: 4,
						remain: 0,
					}
				},
				errorMessage: null,
				warnMessage: null,
				status: 'done',
			})
	})

	it('should handle HERO_PROFILE_SUBMIT_ERROR', () => {
		expect(reducer({
			data: {
				'1': {
					id: '1',
					name: 'Thor',
					str: 1,
					agi: 2,
					int: 3,
					luk: 4,
					remain: 0,
				}
			},
			errorMessage: null,
			warnMessage: null,
			status: 'loading',
		}, {
			type: HERO_PROFILE_SUBMIT_ERROR,
			error: 'error msg'
		}))
			.toEqual({
				data: {
					'1': {
						id: '1',
						name: 'Thor',
						str: 1,
						agi: 2,
						int: 3,
						luk: 4,
						remain: 0,
					}
				},
				errorMessage: 'error msg',
				warnMessage: null,
				status: 'failed',
			})
	})

})
