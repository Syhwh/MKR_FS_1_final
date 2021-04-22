import React from 'react'

import { Col, Form, Row, Button } from 'react-bootstrap'

export const TaskForm = ({ handleChange, task, handleCancel, handleSubmit }) => {
	return (
		<Form>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Task</Form.Label>
				<Form.Control
					type='text'
					name='task'
					placeholder='Enter Project Title'
					onChange={handleChange}
					value={task}
				/>
			</Form.Group>

			<Row className='justify-content-md-center'>
				<Col xs={6} md={4}>
					<Button
						onClick={handleCancel}
						variant='danger'
						type='submit'
					> Cancel
	</Button>
				</Col>
				<Col xs={6} md={4}>
					<Button
						onClick={handleSubmit}
						variant='success'
						type='submit'
					> Save task
	</Button>
				</Col>
			</Row>
		</Form>
	)
}
