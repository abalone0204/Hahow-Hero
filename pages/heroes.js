import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import configureStore from '../store/configureStore'
import fetchHeroes from '../actions/fetchHeroes'
import Layout from '../layouts/Main'
import Opening from '../components/Opening'

const Heroes = (props) => {
	return (
		<Layout heroes={props.hero.data}>
			<Opening/>
		</Layout>
	)
}

Heroes.getInitialProps = async function (context) {
	const { isServer, store } = context
	await store.dispatch(fetchHeroes())
	return { isServer }
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchHeroes: bindActionCreators(fetchHeroes, dispatch),
	}
}

export default withRedux(configureStore, state => state, mapDispatchToProps)(Heroes)
