import calculatorMiddleware from '../calculator'
import {
	HERO_ATTR_UPDATE,
	HERO_ATTR_SET,
	HERO_REMAIN_SET,
	HERO_PROFILE_ERROR,
	HERO_PROFILE_WARN,
} from '../../constants'

const create = (data={}) => {
	const store = {
		getState: jest.fn(() => ({
			profile: { data }
		})),
		dispatch: jest.fn(),
	}
	const next = jest.fn()
	const invoke = (action) => calculatorMiddleware(store)(next)(action)
	const invokeThunk = (action) => () => calculatorMiddleware(store)(next)(action)

	return { store, next, invoke, invokeThunk }
}

describe('middleware: calculator', () => {

	it('should ignore other action', () => {
		const { next, invoke } = create()
		const action = {
			type: 'OTHER_ACTION'
		}
		invoke(action)
		expect(next).toHaveBeenCalledWith({
			type: 'OTHER_ACTION'
		})
	})

	it('should handle HERO_ATTR_UPDATE action without id', () => {
		const { next, invoke } = create()
		const action = {
			type: HERO_ATTR_UPDATE,
			params: {}
		}
		invoke(action)
		expect(next).toHaveBeenCalledWith({
			type: HERO_PROFILE_ERROR,
			error: 'Should specify id.'
		})
	})

	it('should handle HERO_ATTR_UPDATE action without valid operator', () => {
		const { next, invoke } = create()
		const action = {
			type: HERO_ATTR_UPDATE,
			params: {
				id: 1,
				attr: 'str',
				val: 'other'
			}
		}
		invoke(action)
		expect(next).toHaveBeenCalledWith({
			type: HERO_PROFILE_ERROR,
			error: 'Operator should be "inc" or "dec".',
		})
	})

	it('should handle HERO_ATTR_UPDATE action: inc not enough point', () => {
		const { next, invoke } = create({
			'1': {
				str: 1,
				agi: 1,
				luk: 1,
				int: 1,
				remain: 0,
			}
		})
		const action = {
			type: HERO_ATTR_UPDATE,
			params: {
				id: '1',
				attr: 'str',
				val: 'inc'
			}
		}
		invoke(action)
		expect(next).toHaveBeenCalledWith({
			type: HERO_PROFILE_WARN,
			warn: 'Not enough point.',
		})
	})

	it('should handle HERO_ATTR_UPDATE action: inc success', () => {
		const { next, invoke } = create({
			'1': {
				str: 1,
				agi: 1,
				luk: 1,
				int: 1,
				remain: 2,
			}
		})
		const action = {
			type: HERO_ATTR_UPDATE,
			params: {
				id: '1',
				attr: 'str',
				val: 'inc'
			}
		}
		invoke(action)

		expect(next).toHaveBeenCalledWith({
			type: HERO_REMAIN_SET,
			id: '1',
			val: 1,
		})

		expect(next).toHaveBeenCalledWith({
			type: HERO_ATTR_SET,
			id: '1',
			val: 2,
			attr: 'str',
		})
	})

	it('should handle HERO_ATTR_UPDATE action: dec less than 0', () => {
		const { next, invoke } = create({
			'1': {
				str: 0,
				agi: 1,
				luk: 1,
				int: 1,
				remain: 2,
			}
		})
		const action = {
			type: HERO_ATTR_UPDATE,
			params: {
				id: '1',
				attr: 'str',
				val: 'dec'
			}
		}
		invoke(action)
		expect(next).toHaveBeenCalledWith({
			type: HERO_PROFILE_WARN,
			warn: '\'str\' cannot be less than 0.',
		})
	})

	it('should handle HERO_ATTR_UPDATE action: dec success', () => {
		const { next, invoke } = create({
			'1': {
				str: 1,
				agi: 1,
				luk: 1,
				int: 1,
				remain: 2,
			}
		})
		const action = {
			type: HERO_ATTR_UPDATE,
			params: {
				id: '1',
				attr: 'str',
				val: 'dec'
			}
		}
		invoke(action)

		expect(next).toHaveBeenCalledWith({
			type: HERO_REMAIN_SET,
			id: '1',
			val: 3,
		})

		expect(next).toHaveBeenCalledWith({
			type: HERO_ATTR_SET,
			id: '1',
			val: 0,
			attr: 'str',
		})
	})

})
