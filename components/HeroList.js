import HeroCard from './HeroCard'

const HeroList = ({ heroes }) => {
	return (
		<div>
			{heroes.map((hero) =>
				(<HeroCard key={`hero-${hero.id}-${hero.name}`} {...hero}></HeroCard>))}
			<style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content:center;
        }
        `}</style>
		</div>
	)
}

export default HeroList
