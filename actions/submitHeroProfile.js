import {
	CALL_API,
	HERO_PROFILE_SUBMIT_REQUEST,
	HERO_PROFILE_SUBMIT_RESPONSE,
	HERO_PROFILE_SUBMIT_ERROR,
} from '../constants'

const submitHeroProfile = (id, body) => ({
	[CALL_API]: {
		types: [ HERO_PROFILE_SUBMIT_REQUEST, HERO_PROFILE_SUBMIT_RESPONSE, HERO_PROFILE_SUBMIT_ERROR ],
		endpoint: `heroes/${id}/profile`,
		params: { id, body },
		method: 'PATCH',
	}
})

export default submitHeroProfile
