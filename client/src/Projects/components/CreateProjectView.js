import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

export const CreateProjectView = ({ handleSubmit, values, handleChange, handleCancel }) => {
  return (
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Project Title</Form.Label>
        <Form.Control
          type='text'
          name='title'
          placeholder='Enter Project Title'
          onChange={handleChange}
          value={values.title}
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Project description</Form.Label>
        <Form.Control
          name='description'
          as='textarea'
          rows={3}
          onChange={handleChange}
          value={values.description}
        />
      </Form.Group>
      <Row className='justify-content-around'>
        <Button
          onClick={handleCancel}
          variant='danger'
          type='submit'
        > Cancel
      </Button>

        <Button
          onClick={handleSubmit}
          variant='success'
          type='submit'
        > Save Project
      </Button>

      </Row>
    </Form>
  )
}
