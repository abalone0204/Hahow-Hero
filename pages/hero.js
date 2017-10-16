import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import configureStore from '../store/configureStore'
import fetchHeroes from '../actions/fetchHeroes'

import Layout from '../layouts/Main'

const Hero =  (props) => {
	return (
		<Layout heroes={props.heroes.data}>
      Hero!
		</Layout>
	)
}

Hero.getInitialProps = async function (context) {
	const { isServer, store } = context
	const isInit = () => store.getState().heroes.status === 'init'
	return new Promise((resolve) => {
		if (isInit()) {
			store.dispatch(fetchHeroes())
			/*
			 Wait until process of fetching heroes completed
			*/
			const unsubscribe = store.subscribe(() => {
				if (!isInit()) {
					unsubscribe()
					resolve({ isServer })
				}
			})
		} else {
			resolve({ isServer })
		}
	})
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchHeroes: bindActionCreators(fetchHeroes, dispatch),
	}
}

export default withRedux(configureStore, state => state, mapDispatchToProps)(Hero)


