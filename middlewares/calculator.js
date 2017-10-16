import {
	HERO_ATTR_UPDATE,
	HERO_ATTR_SET,
	HERO_REMAIN_SET
} from '../constants'

/**
 * Handle the calculate of profile
 */
export default store => next => action => {
	if (action.type !== HERO_ATTR_UPDATE) {
		return next(action)
	}
	next(action)
	const { id, attr, val} = action.params

	if (typeof val !== 'string' || ['inc', 'dec'].indexOf(val) === -1) {
		throw new Error('Operator should be "inc" or "dec".')
	}
	const state = store.getState()
	const { profile } = state

	const currentProfile = profile.data[id]
	const { remain } = currentProfile
	const target = currentProfile[attr]

	if (val === 'inc') {
		if (remain < 1) {
			throw new Error('Not enough point.')
		}
		next({type: HERO_ATTR_SET, id, attr, val: target+1})
		next({type: HERO_REMAIN_SET, id, val: remain-1})
	}
	if (val === 'dec') {
		if (currentProfile[attr] < 1) {
			throw new Error('Attr can not be smaller than 0.')
		}
		next({type: HERO_ATTR_SET, id, attr, val: target-1})
		next({type: HERO_REMAIN_SET, id, val: remain+1})
	}

}
