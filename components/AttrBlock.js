import Button from './Button'

const AttrBlock = ({attr, val, update}) => {
	return (
		<div className="container">
			<span className="attr">{attr}</span>
			<div className="value">
				<Button onClick={() => update(attr, 'inc')}>+</Button>
				<span>{val}</span>
				<Button onClick={() => update(attr, 'dec')}>-</Button>
			</div>
			<style jsx>{`
       .container {
         display: flex;
         align-items: center;
         justify-content: center;
       }
       .attr {
         flex: 1;
         text-align: center;
       }
       .value {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
       }
      `}</style>
		</div>
	)
}

export default AttrBlock
