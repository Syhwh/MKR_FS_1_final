import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export const AppNavigation = () => {
	return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">My Projects App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/projects">Projects</Nav.Link>
    </Nav>
    <Nav className='mr-6'>
      <Nav.Link href="/">logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
	)
}
