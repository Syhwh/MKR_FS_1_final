import React from 'react'
import { CreateProjectContainer } from '../components/CreateProjectContainer'
import { ProjectsList } from '../components/ProjectsList'
import './sidebar.css'
export const ProjectsSidebar = ({ projects, handleSelect, handleEdit, handleDelete, showForm, setShowForm, createTask, showTasks }) => {

	return (

		<div className='d-flex flex-column p-3 text-white bg-dark' style={{ width: '280px', height: '100vh' }}>
			<a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
				<svg className='bi me-2' width='40' height='32'></svg>
				<span className='fs-4'>Projects</span>
			</a>
			<hr />

			{showForm && (
				<div className='mt-5 mb-3 '>
					<h2>Create a New Project</h2>
					<CreateProjectContainer
						setShowForm={setShowForm}
					/>
				</div>
			)}
			{!showForm && (
				<div
					className='journal__new-entry'
					onClick={() => setShowForm(true)}
				>
					<i className='fa fa-pencil-square-o fa-5x'></i>
					<h2 > New project </h2>
				</div>)}
			<div className='mt-5 mb-3 '>
				<h3 > My projects </h3>
				<div className='  '>
					<ProjectsList
						projects={projects}
						handleSelect={handleSelect}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
						createTask={createTask}
						showTasks={showTasks}
					/>
				</div>
			</div>
		</div>
	)
}
