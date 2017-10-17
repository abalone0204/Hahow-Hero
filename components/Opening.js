import React from 'react'
import frame1 from '../static/marvel-frame-1.jpg'
import openingVideo from '../static/marvel.mp4'

class Openning extends React.Component {

	state = {
		step: 0
	}

	componentDidMount() {
		const video = this.video
		if (video) {
			const handler = (e) => {
				this.setState({ step: 1 }, () => {
					setTimeout(() => this.setState({ step: 2 }), 3000)
				})
				video.removeEventListener('canplay', handler)
			}
			video.addEventListener('canplay', handler)
		}
	}
	render() {
		const { step } = this.state
		const { children,  play } = this.props
		if (!play) {
			return children
		}
		return (
			<div>
				<div className="container">
					<div className={`body--${step}`}>
						{children}
					</div>

					{step === 0 &&
						<img
							src={frame1}
							className="first-frame"
							alt="first frame of marvel"
						/>
					}

					<video loop autoPlay className={`animation--${step}`} ref={(video) => this.video = video}>
						<source src={openingVideo} type="video/mp4" />
					</video>
					<div className={`company--${step}`}>
						Hahow
						<span className="project">hero</span>
					</div>
				</div>
				<style jsx>{`
					.container {
						display: flex;
						flex-wrap: wrap;
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

					.animation--0,
					.animation--2 {
						display: none;
					}
					.first-frame {
						position: absolute;
						width: 100%;
						min-height: 100vh;
						top: 0;
						left: 0;
					}
					.animation--1 {
						position: absolute;
						min-height: 100vh;
						top: 0;
						left: 0;
						opacity: 0;
						animation: fadeOut 3s 1;
					}
					.body--0,
					.body--1,
					.body--2 {
						width: 100%;
						transition: opacity 3s ease;
					}
					.body--0 {
						visibility: hidden;
					}
					.body--1 {
						visibility: visible;
						opacity: 1;
					}
					.body--2 {
						transition: opacity 3s ease;
						opacity: 1;
					}

					@keyframes zoomOut {
						0% {
								transform: scale(2.0);
						}
						100% {
								transform: scale(1.0);
						}
					}
					.company--0 {
						transform: scale(2.0);
					}
					.company--1 {
						animation: zoomOut 3s ease-in-out 1;
					}
					.company--0,
					.company--1,
					.company--2 {
						pointer-events: none;
						position: relative;
						border: solid 1px #fff;
						padding: 8px 4px 0 0;
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
