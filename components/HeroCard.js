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
					<p>name: {props.name}</p>
				</div>
				<style jsx>{`
			.card {
				flex: 1;
				cursor: pointer;
				text-align: center;
				max-width: 250px;
			}
			.active {
				background: #00b69a;
				color: white;
			}
			img {
				display: block;
				margin: 0 auto;
			}
			`}</style>
			</div>
		</Link>
	)
}
export default withRouter(HeroCard)

