import React from 'react'


class Openning extends React.Component {
	state = {
		play: true
	}
	componentDidMount() {
		setTimeout(() => this.setState({ play: false }), 3000)
	}
	render() {
		const { play } = this.state
		return (
			<div>
				<div className="container">
					<div className={play ? 'gif' : 'hide'}/>
					<div className="company">
						Hahow
						<span className="project">hero</span>
					</div>
				</div>
				<style jsx>{`
					.container {
						display: flex;
						align-items: center;
						height: 216px;
					}
					@keyframes fadeIn {
						0% {
							opacity: 0;
							bottom: 50%;
						}
						50% {
							opacity: 0;
						}
						100% {
							opacity: 1;
							bottom: -30px;
						}
					}
					@keyframes fadeOut {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0;
						}
					}
					.hide {
						display: none;
					}
					.gif {
						position: absolute;
						background: url(/static/marvel.gif);
						background-size: cover;
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						opacity: 0;
						animation: fadeOut 3s 1;
					}
					@keyframes zoomOut {
						0% {
								transform: scale(2.0);
						}
						100% {
								transform: scale(1.0);
						}
					}
					.company {
						pointer-events: none;
						position: relative;
						border: solid 1px #fff;
						padding: 8px 4px 0 0;
						animation: zoomOut 3s ease-in-out 1;
						margin: auto auto;
						text-align: center;
						color: #fff;
						width: 300px;
						font-size: 5.5rem;
					}
					.project {
						font-size: 1rem;
						position: absolute;
						bottom: -30px;
						letter-spacing: 54px;
						left: 60%;
						transform: translateX(-50%);
						animation: fadeIn 3s 1;
					}
			`}</style>
			</div>
		)
	}
}

export default Openning
