import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectsList = ({ projects, handleDelete, handleEdit,createTask,showTasks }) => {
	return (
		<div className='d-flex flex-column align-items-stretch ' >
			{projects.map(({ projectTitle, projectDescription, _id }) => (
				<ProjectCard
					key={_id}
					title={projectTitle}
					description={projectDescription}
					id={_id}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
					createTask={createTask}
					showTasks={showTasks}
				/>
			))}
		</div>
	)
}
