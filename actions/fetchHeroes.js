import {
	CALL_API,
	HEROES_REQUEST,
	HEROES_RESPONSE,
	HEROES_ERROR,
} from '../constants'

const fetchHeroes = () => ({
	[CALL_API]: {
		types: [ HEROES_REQUEST, HEROES_RESPONSE, HEROES_ERROR ],
		endpoint: 'heroes',
	}
})

export default fetchHeroes
