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
			<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
			<link prefetch href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
			<link rel='stylesheet' type='text/css' href='/static/ngprogress.css' />
		</Head>
		<HeroList heroes={props.heroes}/>
		<div className="main">
			{props.children}
		</div>
		<style jsx global>{`
		body {
			font-family: 'Ubuntu', sans-serif;
			background: #282a2c;
			color: white;
		}
		.main {
			max-width: 768px;
			margin: 0 auto;
		}
		`}</style>
	</div>
)

export default Main