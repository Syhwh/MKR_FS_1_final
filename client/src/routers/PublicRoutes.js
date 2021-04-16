import React from 'react'
import { Router, Switch } from 'react-router'
import { AuthenticationPage } from '../Authentication/pages/AuthenticationPage'
import { LoginPage } from '../Authentication/pages/LoginPage'
import { MainPage } from '../Global/MainPage'
import { PublicRoute } from './PublicRoute'

export const PublicRoutes = () => {
	return (
		<div>
			<Router>
				<Switch>
					<PublicRoute
						exact
						path='/login'
						component={LoginPage}

					/>

					<PublicRoute
						exact
						path='/signup'
						component={AuthenticationPage}

					/>

					<PublicRoute
						path='/'
						component={MainPage}
					/>

				</Switch>
			</Router>
		</div>
	)
}
