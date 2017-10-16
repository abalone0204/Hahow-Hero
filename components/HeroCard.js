import Link from 'next/link'
import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href }) => {
	const style = {
		marginRight: 10,
		color: router.pathname === href? 'red' : 'black'
	}

	const handleClick = (e) => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	)
}

const HeroCard = (props) => {
	const isActive = props.router.query.id === props.id
	return (
		<Link as={`/heroes/${props.id}`} href={`/hero?id=${props.id}`}>
			<div className={isActive ? 'card active' : 'card'}>
				<div >
					<img src={props.image} alt={`image of ${props.name}`}/>
					<p>{props.name}</p>
				</div>
				<style jsx>{`
			.card {
				flex: 1;
				cursor: pointer;
				text-align: center;
				max-width: 250px;
			}
			.active img {
				background: linear-gradient(#004746, #111111);
				border: 6px solid #00a4a2;
				box-shadow: 0 0 15px #00fffd;
				filter: brightness(1);
			}
			.active img:hover {
				border: 6px solid #00fffd;
				box-shadow: 0 0 25px #00fffd;
			}
			img {
				display: block;
				margin: 0 auto;
				border-radius: 50%;
				height: 200px;
				padding: 5px;
				background-color: transparent;
				transition: all 600ms ease-out;
				filter: brightness(0.4);
			}
			`}</style>
			</div>
		</Link>
	)
}
export default withRouter(HeroCard)

