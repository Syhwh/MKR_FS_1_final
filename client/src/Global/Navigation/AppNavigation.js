import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { AuthContext } from '../Context/AuthContext'

export const AppNavigation = () => {
  const { user, logout } = useContext(AuthContext);
  const history = useHistory()
  const handleLogout = () => {
    history.push('/login')
    logout(user);
  }
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand href='/'>My Projects App</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/projects'></Nav.Link>
        </Nav>
        <Nav className='mr-6'>
          <NavDropdown title='user name' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/settings'>Settings</NavDropdown.Item>
            <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>sign out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
