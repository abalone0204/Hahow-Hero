import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import configureStore from '../store/configureStore'
import fetchHeroes from '../actions/fetchHeroes'
import fetchHeroProfile from '../actions/fetchHeroProfile'
import submitHeroProfile from '../actions/submitHeroProfile'
import updateHeroAttr from '../actions/updateProfileAttr'
import HeroProfile from '../components/HeroProfile'
import Layout from '../layouts/Main'

const Hero =  ({
	hero,
	profile,
	currentHero,
	updateHeroAttr,
	submitHeroProfile,
}) => {
	return (
		<Layout heroes={hero.data} title={currentHero.name}>
			<HeroProfile
				status={profile.status}
				errorMessage={profile.errorMessage}
				warnMessage={profile.warnMessage}
				{...currentHero}
				updateHeroAttr={(attr, val) =>
					updateHeroAttr(currentHero.id, attr, val)}
				submitHeroProfile={(body) =>
					submitHeroProfile(currentHero.id, body)}
			/>
		</Layout>
	)
}

Hero.getInitialProps = async function (context) {
	const { isServer, store } = context
	await Promise.all([
		store.dispatch(fetchHeroProfile(context.query.id)),
		store.dispatch(fetchHeroes())
	])
	return { isServer }
}

const mapStateToProps = (state, ownProps) => {
	const { id } = ownProps.url.query
	const { hero, profile } = state
	return {
		hero,
		profile,
		currentHero: {
			...hero.data.find(h => h.id === id),
			...profile.data[id],
		},
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchHeroes: bindActionCreators(fetchHeroes, dispatch),
		fetchHeroProfile: bindActionCreators(fetchHeroProfile, dispatch),
		updateHeroAttr: bindActionCreators(updateHeroAttr, dispatch),
		submitHeroProfile: bindActionCreators(submitHeroProfile, dispatch),
	}
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(Hero)
