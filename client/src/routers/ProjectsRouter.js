import React, { useContext } from 'react'
import {  Switch } from 'react-router'
import { AuthContext } from '../Global/Context/AuthContext';

import { EditProject } from '../Projects/pages/EditProject';
import { ProjectsPage } from '../Projects/pages/ProjectsPage'
import { PrivateRoute } from './PrivateRoute';

export const ProjectsRouter = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<Switch>
				<PrivateRoute
					exact
					path='/projects'
					component={ProjectsPage}
					isAuthenticated={user}
				/>
				<PrivateRoute
					path={`/projects/:id`}
					component={EditProject}
					isAuthenticated={user}
				/>
			</Switch>
		</div>
	)
}
