import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { ProjectsContext } from '../../Global/Context/ProjectsContext';
import { CreateProjectView } from './CreateProjectView'

export const CreateProjectContainer = ({ setShowForm }) => {
	const { projects, editProject, createProject } = useContext(ProjectsContext);

	const { id } = useParams();
	const history = useHistory();


	const [values, setValues] = useState({
		title: '',
		description: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		submitForm()
		if (!id) {
			setShowForm(false)
		}
	};

	const submitForm = () => {
		if (id) {
			console.log('edit project')
			console.log(id)
			editProject(id, values.title, values.description)
			history.push('/projects');
		} else {
			createProject(values.title, values.description);
		}
	};


	const handleCancel = () => {
		if (id) {
			history.push('/projects');
		}
		else {
			setShowForm(false)
		}
	}

	useEffect(() => {
		if (projects && id) {
			const [project] = projects.filter(project => project._id === id);
			setValues({
				title: project.projectTitle,
				description: project.projectDescription,
			})
		}
	}, [])

	return (
		<CreateProjectView
			handleChange={handleChange}
			values={values}
			handleSubmit={handleSubmit}
			handleCancel={handleCancel}
		/>
	)
}
