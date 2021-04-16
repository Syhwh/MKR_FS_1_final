import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

export const JumbotronComponent = () => {
	return (
		<Jumbotron className='py-6 text-center container'>
		<h1>Welcome back!</h1>
		<p>
			This is a great app created to help you with your projects and tasks.
		</p>
		<p>
			<Button variant="primary">Go to my projects</Button>
		</p>
	</Jumbotron>
	)
}
