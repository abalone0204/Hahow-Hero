import Link from 'next/link'

const Logo = () => {
	return (
		<Link href="/heroes">
			<div className="logo">
        home
				<style jsx>{`
        .logo {
          position: relative;
          cursor: pointer;
          font-size: 2rem;
          padding: 0.25rem 0.5rem;
          border: solid 1px #fff;
          text-align: center;
          max-width: 100px;
        }
      `}</style>
			</div>
		</Link>

	)
}

export default Logo
