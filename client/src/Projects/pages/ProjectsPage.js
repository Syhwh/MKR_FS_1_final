import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../../Global/Context/AuthContext'
import { ProjectsContext } from '../../Global/Context/ProjectsContext'
import { ConfirmationModal } from '../components/ConfirmationModal'

import { CreateProjectContainer } from '../components/CreateProjectContainer'

import { Sidebar } from './Sidebar'


export const ProjectsPage = () => {
	const history = useHistory()
	const { user, logout } = useContext(AuthContext)
	const { projects, deleteProject } = useContext(ProjectsContext)
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);
	const [projectId, setProjectId] = useState()

	const [showForm, setShowForm] = useState(false)

	const handleOnclick = () => {
		logout(user);
		history.push('/')
	}

	const handleEdit = (id) => {
		history.push(`/projects/${id}`)
	}
	const handleShowTasks = (id) => {
		history.push(`/projects/${id}/tasks`)
	}
	const handleDelete = (id) => {
		setShowConfirmationModal(true)
		setProjectId(id)
	}

	const handleClose = () => setShowConfirmationModal(false);
	const handleConfirmation = () => {
		deleteProject(projectId)
		setShowConfirmationModal(false)
	};
const handleCreateTask=(id)=>{
	history.push(`/projects/${id}/tasks/create`)
}

	if (!projects) return <h2>Loading...</h2>
	return (<>

		{
			showConfirmationModal && (
				<ConfirmationModal
					show={showConfirmationModal}
					handleCancel={handleClose}
					handleConfirmation={handleConfirmation}
					typeElement='project'
				/>
			)
		}
			<Sidebar
				projects={projects}
				handleDelete={handleDelete}
				handleEdit={handleEdit}
				showForm={showForm}
				setShowForm={setShowForm}
				createTask={handleCreateTask}
				showTasks={handleShowTasks}
			/>


	</>)
}
