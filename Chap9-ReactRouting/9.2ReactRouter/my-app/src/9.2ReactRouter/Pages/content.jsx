import { PropTypes } from 'prop-types'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'


class Content extends React.Component {
  render() {
    console.log(1)
    return (
      
      <div className='main'>
        <h1>Node.University</h1>
        <Navbar bg="dark" variant="dark">
          <Container style={{margin:0}}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/posts">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <br/>
        {this.props.children}
        <Outlet />
      </div>
    )
  }
}

Content.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Content