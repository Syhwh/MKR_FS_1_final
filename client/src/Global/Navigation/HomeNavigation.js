import React from 'react'

export const HomeNavigation = () => {
	return (
		<header className="fixed-top">
			<nav className="navbar py-3" data-track-group="Global Header">
				<a className="d-block float-left" href="/home">
					HOME
				</a>
				<div className="float-right buttons">
					<a href="/login" className="btn btn-sm btn-link text-primary">Log in</a>
					<a href="/signup"
						className="btn btn-sm bg-primary text-white font-weight-bold">Sign up</a>
				</div>
			</nav>
		</header>
	)
}
