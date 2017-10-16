import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import configureStore from '../store/configureStore'
import fetchHeroes from '../actions/fetchHeroes'
import Layout from '../layouts/Main'

const Heroes = (props) => {
	return (
		<Layout heroes={props.hero.data}>
			<h2>Heroes!</h2>
			<h2>status:  {props.hero.status}</h2>
		</Layout>
	)
}

Heroes.getInitialProps = async function (context) {
	const { isServer, store } = context
	const isInit = () => store.getState().hero.status === 'init'
	if (isInit()) {
		await store.dispatch(fetchHeroes())
	}
	return { isServer }
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchHeroes: bindActionCreators(fetchHeroes, dispatch),
	}
}

export default withRedux(configureStore, state => state, mapDispatchToProps)(Heroes)
