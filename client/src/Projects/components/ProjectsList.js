import React from 'react'
import { Card } from 'react-bootstrap'


export const ProjectsList = ({ projects, handleSelect, handleEdit, handleDelete }) => {
	return (
		<>
			{projects.map(({ projectTitle, _id }) => (
				<Card
					body
					key={_id}
					style={{ marginBottom: '1rem', color: 'black', cursor: 'pointer' }}

				>
					<span onClick={() => handleSelect(_id)}>
						{projectTitle}
					</span>
					<span className='ml-3'>

						<button
							onClick={() => handleEdit(_id)}
							className='btn btn-outline-secondary btn-sm mr-2'
							type='button' title='Edit'>
							<i className='fa fa-edit'></i>
						</button>
						<button
							onClick={() => handleDelete(_id)}
							className='btn btn-outline-danger btn-sm '
							type='button' title='Delete'>
							<i className='fa fa-trash'></i>
						</button>
					</span>
				</Card>
			))}
		</>

	)
}
