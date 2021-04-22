import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { AuthContext } from '../../Global/Context/AuthContext'
import { ProjectsContext } from '../../Global/Context/ProjectsContext'
import { TasksView } from '../../Tasks/TasksView'
import { ConfirmationModal } from '../components/ConfirmationModal'

import { ProjectsSidebar } from './ProjectsSidebar'


export const ProjectsPage = () => {
	const history = useHistory()

	const { projects, deleteProject } = useContext(ProjectsContext)
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);
	const [projectId, setProjectId] = useState()

	const [showForm, setShowForm] = useState(false)


	const handleEdit = (id) => {
		history.push(`/projects/${id}?edit=true`)
		setShowForm(true)
	}
	const handleSelect = (id) => {
		history.push(`/projects/${id}`)
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
		<Row>
			<Col md={3}>
				<ProjectsSidebar
					projects={projects}
					handleSelect={handleSelect}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
					showForm={showForm}
					setShowForm={setShowForm}
				/>
			</Col>
			<Col>
				<TasksView />
			</Col>
		</Row>


	</>)
}
