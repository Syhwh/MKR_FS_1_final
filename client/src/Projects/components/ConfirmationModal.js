import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export const ConfirmationModal = ({ handleCancel, show, handleConfirmation, typeElement }) => {
	return (
		<Modal show={show} onHide={handleCancel}>
			<Modal.Header closeButton>
				<Modal.Title>Delete {typeElement}</Modal.Title>
			</Modal.Header>
			<Modal.Body>Are you sure you want to delete this <strong>{typeElement}</strong>?
			this action can't be undone!</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleCancel}>
					Cancel
			</Button>
				<Button variant='danger' onClick={handleConfirmation}>
					Delete {typeElement}
			</Button>
			</Modal.Footer>
		</Modal>
	)
}
