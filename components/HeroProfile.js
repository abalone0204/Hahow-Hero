import AttrBlock  from './AttrBlock'
import Button from './Button'

const HeroProfile = ({ warnMessage, errorMessage, status , name , str, int, agi, luk, remain, updateHeroAttr, submitHeroProfile }) => {
	return (
		<div className="container">
			<h2>{name}</h2>
			{status === 'loading' &&
				<div className="loading">
					loading ...
				</div>
			}
			<div className={`message msg--${status}`}>
				{status === 'failed' &&	`failed: ${errorMessage}` }
				{status === 'warned' &&	`${warnMessage}` }
			</div>
			<div className="attrs">
				<AttrBlock attr="str" val={str} update={updateHeroAttr}/>
				<AttrBlock attr="int" val={int} update={updateHeroAttr}/>
				<AttrBlock attr="agi" val={agi} update={updateHeroAttr}/>
				<AttrBlock attr="luk" val={luk} update={updateHeroAttr}/>
			</div>
			<div className="remain">
				<p>remain: {remain}</p>
				<Button category="lg" onClick={() => {
					submitHeroProfile({
						str, int, agi, luk,
					})
				}}>save</Button>
			</div>
			<style jsx>{`
			@keyframes blink {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
			.loading {
				position: absolute;
				font-size: 1.25rem;
				top: 1rem;
				right: 1rem;
			}
			.loading {
				animation: blink 0.5s infinite;
			}
			.message {
				width: 100%;
				text-align: center;
				height: 2rem;
			}
			.msg--failed {
				color: red;
			}
			.msg--warned {
				color: #f4c31c;
			}

			@keyframes fadeIn {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
			h2 {
				width: 100%;
				text-align: center;
				margin: 5px auto;
				padding-top: 1rem;
				padding-bottom: 1rem;
			}
			.container {
				display: flex;
				flex-wrap: wrap;
				animation: fadeIn 2s 1;
				justify-content: center;
				font-size: 1.5rem;
				background: linear-gradient(#004746, #111111);
				border: 6px solid #00a4a2;
				box-shadow: 0 0 15px #00fffd;
				border-radius: 5px;
				margin: 20px auto 0;
				position: relative;
				z-index: 4;

			}
			.container:hover {
				border: 6px solid #00fffd;
				box-shadow: 0 0 25px #00fffd;
				transition: 1s all;
			}
			.attrs {
				flex: 1;
				width: 300px;
			}
			.remain {
				position: relative;
				display: flex;
				flex-direction: column;
				flex: 1;
				text-align: center;
				justify-content: center;
				align-items: center;
			}

			`}</style>
		</div>
	)
}

export default HeroProfile
