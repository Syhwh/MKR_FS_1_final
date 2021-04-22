import React, { useContext } from 'react'
import { Switch } from 'react-router'
import { AuthContext } from '../Global/Context/AuthContext';
import { TaskContextProvider } from '../Global/Context/TaskContextProvider';

import { EditProject } from '../Projects/pages/EditProject';
import { ProjectsPage } from '../Projects/pages/ProjectsPage'
import { TasksContainer } from '../Tasks/TasksContainer';
import { TasksView } from '../Tasks/TasksView';
import { PrivateRoute } from './PrivateRoute';

export const ProjectsRouter = () => {
	const { user } = useContext(AuthContext);
	return (
		<TaskContextProvider>
			<div>
				<Switch>
					<PrivateRoute
						path={`/projects/:id/tasks/create`}
						component={TasksContainer}
						isAuthenticated={user}
					/>
						<PrivateRoute
						path={`/projects/:id/tasks`}
						component={TasksView}
						isAuthenticated={user}
					/>
					<PrivateRoute
						exact
						path='/projects'
						component={ProjectsPage}
						isAuthenticated={user}
					/>
					<PrivateRoute
						path={`/projects/:id`}
						component={ProjectsPage}
						isAuthenticated={user}
					/>
				</Switch>
			</div>
		</TaskContextProvider>
	)
}
