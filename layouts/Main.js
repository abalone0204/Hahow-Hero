import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import NGProgressCSS from '../static/ngprogress.css'
import Opening from '../components/Opening'
import HeroList from '../components/HeroList'

Router.onRouteChangeStart = () => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()
import Logo from '../components/Logo'
class Main extends React.Component {
	render() {
		const { children, title, heroes, playOpening } = this.props
		return (
			<div style={{ marginBottom: 20 }}>
				<Head>
					<title>{title ? `${title}@HahowHero` : 'HahowHero'}</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
					<link rel="preload" href="https://fonts.googleapis.com/css?family=Ubuntu" as="style"/>
					<link rel="preload" href={NGProgressCSS} as="style" />
				</Head>
				<div className="main">
					<nav>
						<Logo />
					</nav>
					<Opening play={playOpening}>
						<HeroList heroes={heroes} />
					</Opening>
					{children}
				</div>
				<style jsx global>{`
				  nav {
						position: relative;
						padding: 0.5rem;
					}
					body {
						font-family: 'Ubuntu', sans-serif;
						background: #000;
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