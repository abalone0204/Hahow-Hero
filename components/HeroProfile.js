import AttrBlock  from './AttrBlock'
import Button from './Button'

const HeroProfile = ({ str, int, agi, luk, remain, updateHeroAttr, submitHeroProfile }) => {
	return (
		<div className="container">
			<div className="status">
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
			.container {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				font-size: 2rem;
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
			.status {
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
