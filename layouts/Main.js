import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import HeroList from '../components/HeroList'

Router.onRouteChangeStart = () => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Main extends React.Component {
	render() {
		const { children, heroes } = this.props
		return (
			<div style={{ marginBottom: 20 }}>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
					<link prefetch href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
					<link rel='stylesheet' type='text/css' href='/static/ngprogress.css' />
				</Head>
				<div className="main">
					<HeroList heroes={heroes} />
					{children}
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
						padding-top: 1.5rem;
					}
				`}</style>
			</div>
		)
	}
}

export default Main