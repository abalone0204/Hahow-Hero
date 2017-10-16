import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import HeroList from '../components/HeroList'

Router.onRouteChangeStart = (url) => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Main = (props) => (
	<div style={{ marginBottom: 20 }}>
		<Head>
			{/* Import CSS for nprogress */}
			<link rel='stylesheet' type='text/css' href='/static/ngprogress.css' />
		</Head>
		<HeroList heroes={props.heroes}/>
		<h2>Main layout</h2>
		{props.children}
	</div>
)

export default Main