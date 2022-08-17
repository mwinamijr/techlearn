import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { logout } from '../redux/actions/userActions'

function Header() {

  const dispatch = useDispatch()

  const userLogin = useSelector(store => store.userLogin)
  const { userInfo } = userLogin
  
  const logoutHandler = () => (
      dispatch(logout())
  )
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>TechSchool</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
              <Nav className="mr-auto">

                <LinkContainer to='/'>
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                    <Nav.Link >About</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to='/contact'>
                    <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                          
              </Nav>
              {userInfo
              ? 
                <Nav>
                  <LinkContainer onClick={logoutHandler} className="float-right" to='/'>
                    <Nav.Link ><i className=" float-right"></i>logout</Nav.Link>
                  </LinkContainer>
                </Nav>
              :
                <Nav>
                  <LinkContainer className="float-right" to='/login'>
                      <Nav.Link ><i className=" float-right"></i>Login</Nav.Link>
                  </LinkContainer>
                </Nav>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header
