import {
	HERO_ATTR_UPDATE,
	HERO_ATTR_SET,
	HERO_REMAIN_SET,
	HERO_PROFILE_ERROR,
	HERO_PROFILE_WARN,
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

	const throwError = (error) => next({ type: HERO_PROFILE_ERROR, error })
	const throwWarn = (warn) => next({ type: HERO_PROFILE_WARN, warn })
	const setAttr = (val) => next({ type: HERO_ATTR_SET, id, attr, val })
	const setRemain = (val) => next({ type: HERO_REMAIN_SET, id, val })

	if (typeof val !== 'string' || ['inc', 'dec'].indexOf(val) === -1) {
		throwError('Operator should be "inc" or "dec".')
		return
	}
	const state = store.getState()
	const { profile } = state

	const currentProfile = profile.data[id]
	const { remain } = currentProfile
	const target = currentProfile[attr]

	if (val === 'inc') {
		if (remain < 1) {
			throwWarn('Not enough point.')
			return
		}
		setAttr(target+1)
		setRemain(remain-1)
	}
	if (val === 'dec') {
		if (currentProfile[attr] < 1) {
			throwWarn(`'${attr}' cannot be less than 0.`)
			return
		}
		setAttr(target-1)
		setRemain(remain+1)
	}

}
