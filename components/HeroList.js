import HeroCard from './HeroCard'

const HeroList = ({ heroes }) => {
	return (
		<div>
			{heroes.map((hero) =>
				(<HeroCard key={`hero-${hero.id}-${hero.name}`} {...hero}></HeroCard>))}
			<style jsx>{`
        @keyframes show {
          0% {
            height: 0;
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            height: auto;
            opacity: 1;
          }
        }
        div {
          display: flex;
          overflow: hidden;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content:center;
        }
        `}</style>
		</div>
	)
}

export default HeroList
