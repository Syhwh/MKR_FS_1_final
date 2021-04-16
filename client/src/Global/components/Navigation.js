import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export const Navigation = () => {
	return (<>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">React-Projects</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#features">Home</Nav.Link>
					<Nav.Link href="#pricing">Create Projects</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="#deets">Signup</Nav.Link>
					<Nav.Link href="#memes">login</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

	</>
	)
}
