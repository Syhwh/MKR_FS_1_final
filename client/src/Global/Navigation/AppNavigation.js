import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export const AppNavigation = () => {
	return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  {/* <Navbar.Brand href="/">My Projects App</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/projects"></Nav.Link>
    </Nav>
    <Nav className='mr-6'>
    <div className='dropdown'>
          <a href='#' className='d-flex align-items-center text-white text-decoration-none dropdown-toggle' id='dropdownUser1' data-bs-toggle='dropdown' aria-expanded='false'>
            <img src='https://github.com/mdo.png' alt='mdo' width='32' height='32' className='rounded-circle me-2' />
            <strong>mdo</strong>
          </a>
          <ul className='dropdown-menu dropdown-menu-dark text-small shadow' aria-labelledby='dropdownUser1'>
            <li><a className='dropdown-item' href='#'>New project...</a></li>
            <li><a className='dropdown-item' href='#'>Settings</a></li>
            <li><a className='dropdown-item' href='#'>Profile</a></li>
            <li><hr className='dropdown-divider' /></li>
            <li><a className='dropdown-item' href='#'>Sign out</a></li>
          </ul>
        </div>
      {/* <Nav.Link href="/">logout</Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
	)
}
