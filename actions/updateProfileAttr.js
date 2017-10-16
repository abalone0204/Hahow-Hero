
import { HERO_ATTR_UPDATE } from '../constants'

const updateHeroAttr = (id, attr, val) => {
	return {
		type: HERO_ATTR_UPDATE,
		params: {
			id, attr, val
		}
	}
}

export default updateHeroAttr
