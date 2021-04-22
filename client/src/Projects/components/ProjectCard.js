import React from 'react'

export const ProjectCard = ({ title, description, id, handleEdit, handleDelete, createTask,showTasks }) => {
	return (
		<div  className=' list-group-item list-group-item-action py-3 lh-tight mb-2'>
			<div className='d-flex align-items-center justify-content-between'>
				<strong className='mb-1'>{title}</strong>
				<div>
					<button
						onClick={() => handleEdit(id)}
						className='btn btn-outline-secondary btn-sm mr-2'
						type='button' title='Edit'>
						<i className='fa fa-edit'></i>
					</button>
					<button
						onClick={() => handleDelete(id)}
						className='btn btn-outline-danger btn-sm '
						type='button' title='Delete'>
						<i className='fa fa-trash'></i>
					</button>

					<button
						onClick={() => createTask(id)}
						className='btn btn-outline-secondary btn-sm '
						type='button' title='Crate'>
						<i className='fa fa-pencil'></i>
					</button>
					<button
						onClick={() => showTasks(id)}
						className='btn btn-outline-secondary btn-sm '
						type='button' title='List'>
						<i className='fa fa-align-justify'></i>
					</button>
				</div>
			</div>
			<div className='col-10 mb-1 '><p>{description}</p></div>
		</div>
	)
}
