import {
	CALL_API,
	HERO_PROFILE_REQUEST,
	HERO_PROFILE_RESPONSE,
	HERO_PROFILE_ERROR,
} from '../constants'

const fetchHeroProfile = (id) => ({
	[CALL_API]: {
		types: [ HERO_PROFILE_REQUEST, HERO_PROFILE_RESPONSE, HERO_PROFILE_ERROR ],
		endpoint: `heroes/${id}/profile`,
		params: { id }
	}
})

export default fetchHeroProfile
