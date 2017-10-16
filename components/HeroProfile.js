const UpdateAttr = ({attr, val, update}) => {
	return (
		<div>
			{attr}:
			<button onClick={() => update(attr, 'inc')}>+</button>
			{val}
			<button onClick={() => update(attr, 'dec')}>-</button>
		</div>
	)
}

const HeroProfile = ({ str, int, agi, luk, remain,updateHeroAttr, submitHeroProfile }) => {
	return (
		<div>
			<UpdateAttr attr="str" val={str} update={updateHeroAttr}/>
			<UpdateAttr attr="int" val={int} update={updateHeroAttr}/>
			<UpdateAttr attr="agi" val={agi} update={updateHeroAttr}/>
			<UpdateAttr attr="luk" val={luk} update={updateHeroAttr}/>
			<p>remain: {remain}</p>
			<button onClick={() => {
				submitHeroProfile({
					str, int, agi, luk,
				})
			}}>save</button>
		</div>
	)
}

export default HeroProfile
