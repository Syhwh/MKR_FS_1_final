import React, { useContext, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router'
import { TaskContext } from '../Global/Context/TaskContext'

export const TasksView = () => {

	const { getTasks, tasksState } = useContext(TaskContext)
	const { id } = useParams()

	useEffect(() => {
		getTasks(id)
	}, [])

	if (!tasksState) return <h2>Select a project</h2>


	return (


			<Table striped bordered hover variant='dark'>
				<thead>
					<tr>
						<th>#</th>
						<th>Task</th>
						<th>Status</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>

					{tasksState.map(({ _id, task, status }, idx) => (
						<tr key={_id}>
							<td>{idx + 1}</td>
							<td>{task}</td>
							<td>{!status ? 'Pending' : 'Done'}</td>
							<td>
								<button
									onClick={() => console.log('edit task')}
									className='btn btn-outline-secondary btn-sm '
									type='button' title='Edit'>
									<i className='fa fa-pencil'></i>
								</button></td>
							<td>
								<button
									onClick={() => console.log('delete task')}
									className='btn btn-outline-danger btn-sm '
									type='button' title='Delete'>
									<i className='ffa fa-trash'></i>
								</button>
							</td>
						</tr>
					))}

				</tbody>
			</Table>


	)
}
