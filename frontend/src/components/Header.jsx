import React from 'react'
import {Container , Nav, Navbar, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
const navigate = useNavigate()
const siginHandler=()=>{
  navigate('/auth')
}
const registerHandler=()=>{
  navigate('/register')
}

  return (
    <header>

    <Navbar bg='transparent' variant='light' expand='lg' collapseOnSelect>
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand >
            <img src={logo} alt="MedRet" height='42px' width='40px'/>
            MedRet
          </Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='m-auto' style={{fontWeight:'bold'}}>
              <LinkContainer to='/home'>
              <Nav.Link >
              Home
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/appointments'>
              <Nav.Link>
               Appointments
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/services'>
              <Nav.Link>
               Services              
               </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/aboutus'>
              <Nav.Link>
               About Us              
               </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contactus'>
              <Nav.Link>
               Contact Us              
               </Nav.Link>
              </LinkContainer>
            </Nav>
      <div style={{display:'flex', gap:'10px'}}>
              <Button onClick={siginHandler} className='btn btn-primary ' variant='outline-light' >
                Sign In
              </Button>
              <Button onClick={registerHandler} className='btn btn-primary ' variant='outline-light'>
                Register
              </Button>
      </div>
          </Navbar.Collapse>
          </Container>
    </Navbar>
  </header>
  )
}

export default Header