import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import configureStore from '../store/configureStore'
import fetchHeroes from '../actions/fetchHeroes'
import Layout from '../layouts/Main'

const Heroes = (props) => {
	return (
		<Layout playOpening={true} heroes={props.hero.data}>

		</Layout>
	)
}

Heroes.getInitialProps = async function (context) {
	const { store } = context
	await store.dispatch(fetchHeroes())
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchHeroes: bindActionCreators(fetchHeroes, dispatch),
	}
}

export default withRedux(configureStore, state => state, mapDispatchToProps)(Heroes)
