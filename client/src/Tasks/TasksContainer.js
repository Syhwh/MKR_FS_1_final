import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { TaskContext } from '../Global/Context/TaskContext'
import { TaskForm } from './TaskForm'

export const TasksContainer = () => {
	const [task, setTask] = useState('')
	const { createTask } = useContext(TaskContext)
	const { id } = useParams();
	const history = useHistory()

	const handleChange = (e) => {
		setTask(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		createTask(id, task)
		history.push('/projects')

	}

	const handleCancel = () => {
		console.log('cancel')
		history.push('/projects')
	}


	return (
		<Container>
			<TaskForm
				handleChange={handleChange}
				task={task}
				handleCancel={handleCancel}
				handleSubmit={handleSubmit}
			/>
		</Container>
	)
}
