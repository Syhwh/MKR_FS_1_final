import React from 'react'
import { CreateProjectContainer } from '../components/CreateProjectContainer'
import { ProjectsList } from '../components/ProjectsList'
import './sidebar.css'
export const Sidebar = ({ projects, handleDelete, handleEdit, showForm, setShowForm }) => {

	return (
		<aside className='journal__sidebar'>
			{!showForm && (
				<div
					className='journal__new-entry'
					onClick={() => setShowForm(true)}
				>
					<i className='fa fa-pencil-square-o fa-5x'></i>
					<h2 > New project </h2>
				</div>)}
			{showForm && (
				<div className='mt-5 mb-3 journal__entry'>
					<h2>Create a New Project</h2>
					<CreateProjectContainer
						setShowForm={setShowForm}
					/>
				</div>
			)}
			<div className='mt-5 mb-3 '>
				<h3 > My projects </h3>
				<div className='journal__entries'>
					<ProjectsList
						projects={projects}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
					/>
				</div>
			</div>

		</aside>
	)
}
