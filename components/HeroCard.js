import Link from 'next/link'
import { withRouter } from 'next/router'

const HeroCard = (props) => {
	const isActive = props.router.query.id === props.id
	return (
		<Link as={`/heroes/${props.id}`} href={`/hero?id=${props.id}`}>
			<div className={isActive ? 'card active' : 'card'}>
				<img src={props.image} height="100" alt={`image of ${props.name}`}/>
				<div className="name">{props.name}</div>
				<style jsx>{`
					.card {
						position: relative;
						flex: 1;
						cursor: pointer;
						text-align: center;
						max-width: 250px;
						box-sizing: border-box;
						padding: 5px;
					}
					.name {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%);
						font-size: 1.2rem;
						background: rgba(0,0,0, 0.6);
						padding: 2px;
						transition: all ease 600ms;
						border-radius: 3px;
					}
					.active .name {
						top: 100%;
						opacity: 0;
					}
					.active img {
						background: #00a4a2;
						border: 1px solid #00a4a2;
						box-shadow: 0 0 15px #00fffd;
						filter: brightness(1);
					}
					.active img:hover {
						border: 1px solid #00fffd;
						box-shadow: 0 0 25px #00fffd;
					}
					img {
						display: block;
						margin: 0 auto;
						border-radius: 50%;
						border: 1px solid transparent;
						height: 100px;
						padding: 5px;
						transition: all 600ms ease-out;
						filter: brightness(0.4);
					}
			`}</style>
			</div>
		</Link>
	)
}
export default withRouter(HeroCard)

