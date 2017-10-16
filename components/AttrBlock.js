import Button from './Button'

const AttrBlock = ({attr, val, update}) => {
	return (
		<div className="container">
			<span className="attr">{attr}</span>
			<div className="options">
				<Button onClick={() => update(attr, 'inc')}>+</Button>
				<span className="value">{val}</span>
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
         width: 2rem;
         text-align: center;
       }
       .options {
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
