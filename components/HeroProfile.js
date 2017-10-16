const UpdateAttr = ({attrName, attr, }) => {
	return (
		<div>
			{attrName}: {attr}
		</div>
	)
}

const HeroProfile = ({ str, int, agi, luk }) => {
	return (
		<div>
			<UpdateAttr attrName="str" attr={str}/>
			<UpdateAttr attrName="int" attr={int}/>
			<UpdateAttr attrName="agi" attr={agi}/>
			<UpdateAttr attrName="luk" attr={luk}/>
		</div>
	)
}

export default HeroProfile
