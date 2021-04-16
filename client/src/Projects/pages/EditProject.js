import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { CreateProjectContainer } from '../components/CreateProjectContainer'

export const EditProject = () => {
	return (
		<Container>
			<Row>
				<h2>Edit Project</h2>
			</Row>
			<Row>
				<CreateProjectContainer />
			</Row>
		</Container>
	)
}
