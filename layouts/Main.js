import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

Router.onRouteChangeStart = () => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()
import Logo from '../components/Logo'
class Main extends React.Component {
	render() {
		const { children, title } = this.props
		return (
			<div style={{ marginBottom: 20 }}>
				<Head>
					<title>{title ? `${title}@HahowHero` : 'HahowHero'}</title>
					<meta charSet='utf-8' />
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
					<link prefetch href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
					<link rel='stylesheet' type='text/css' href='/static/ngprogress.css' />
				</Head>
				<div className="main">
					<nav>
						<Logo />
					</nav>
					{children}
				</div>
				<style jsx global>{`
				  nav {
						position: relative;
						padding: 0.5rem;
					}
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
	}
}

export default Main